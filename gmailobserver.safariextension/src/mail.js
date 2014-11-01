/**
 * Mail Class
 * @constructor
 */

(function($){

    var Mail = function () {
        this.initialize();
    };

    var client = new Client(),
        _timerId = null;

    Mail.prototype = {

        initialize: function () {
            safari.application.addEventListener('command', this.onCommand.bind(this), false);
            safari.extension.settings.addEventListener('change', this.onChange.bind(this), false);
            this.observe();
        },

        /**
         * @returns {void}
         */
        observe: function () {
            if (_timerId !== null) {
                clearTimeout(_timerId);
                _timerId = null;
            }
            this.getFeed();
            _timerId = setTimeout(this.observe.bind(this), client.interval);
        },

        /**
         * @returns {void}
         */
        getFeed: function () {
            $.ajax({
                type: 'GET',
                url: this.getFeedUrl(),
                dataType: 'xml'
            })
            .done(this.onDoneAtom.bind(this))
            .fail(this.onFailAtom.bind(this));
        },

        /**
         * @returns {string}
         */
        getFeedUrl: function () {
            return client.url + '/feed/atom';
        },

        /**
         * @param {object} err
         */
        onFailAtom: function (err) {
            client.notification('通信エラーが発生しました。' + err.status + ' ' + err.statusText, client.url).show();
        },

        /**
         * @param {object} atom
         */
        onDoneAtom: function (atom) {
            var data = [];
            var dom = $(atom);

            dom.find('entry').each(function(){
                var entry = $(this);
                data.push({
                    from: entry.find('author name').text().replace(/^(.{17}).*$/, '$1...'),
                    subject: entry.find('title').text()
                });
            });

            client.badge = dom.find('fullcount').text()|0;

            if (data.length > 0 && client.notice) {
                client.notification(data[0].from, data[0].subject).show();
            }
        },

        /**
         * @returns {void}
         */
        openMail: function () {
            var mailTab = null;
            safari.application.activeBrowserWindow.tabs.some(function(safariBrowserTab){
                if (safariBrowserTab.url.indexOf(client.url) === 0) {
                    mailTab = safariBrowserTab;
                    return true;
                }
                return false;
            });

            if (mailTab === null) {
                safari.application.activeBrowserWindow.openTab().url = client.url;
            } else {
                mailTab.activate();
            }
        },

        /**
         * @param {SafariValidateEvent} e
         */
        onCommand: function (e) {
            if (e.command === 'cmd.mail') {
                this.openMail();
                client.badge = 0;
            }
        },

        /**
         * @param {SafariExtensionSettingsChangeEvent} e
         */
        onChange: function (e) {
            if (e.key === 'interval') {
                this.observe();
            }
        }

    };

    new Mail();

})(Zepto);
