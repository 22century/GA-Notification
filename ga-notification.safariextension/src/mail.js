/**
 * Mail Class
 * @constructor
 */
function Mail() {
    this.initialize();
}

Mail.prototype = {

    /**
     * @type {string}
     */
    _url : '',

    /**
     * @type {number}
     */
    _timerId: 0,

    /**
     * @type {SafariExtensionToolbarItem}
     */
    _toolbarItem: null,

    /**
     * @returns {void}
     */
    initialize: function(){
        safari.extension.toolbarItems.forEach(function(item){
            if (item.identifier === 'tool_mail') this._toolbarItem = item;
        }, this);

        this.onCheckMail.call(this);
        this._timerId = setInterval(this.onCheckMail.bind(this), this.interval);

        safari.application.addEventListener('command', this.onCommand.bind(this), false);
        safari.extension.settings.addEventListener('change', this.onChange.bind(this), false);
    },

    /**
     * @param {number} num
     */
    set badge(num){
        this._toolbarItem.badge = num;
    },

    /**
     * @returns {number}
     */
    get badge(){
        return this._toolbarItem.badge|0;
    },

    /**
     * @returns {string}
     */
    get url(){
        return 'https://mail.google.com/mail/';
    },

    /**
     * @returns {string}
     */
    get feedUrl(){
        return this.url + 'feed/atom';
    },

    /**
     * @returns {boolean}
     */
    get notice(){
        if (safari.extension.settings.hasOwnProperty('notice')) {
            return parseInt(safari.extension.settings.notice, 10) === 1;
        } else {
            return false;
        }
    },

    /**
     * @returns {number}
     */
    get interval(){
        var min = 1000 * 60;
        if (safari.extension.settings.hasOwnProperty('interval')) {
            return min * safari.extension.settings.interval|0;
        } else {
            return min * 10;
        }
    },

    /**
     * @returns {void}
     */
    resetTimer: function(){
        if (this._timerId > 0) {
            clearInterval(this._timerId);
        }
        this._timerId = setInterval(this.onCheckMail.bind(this), this.interval);
    },

    /**
     * @param {string} title
     * @param {string} body
     * @returns {object}
     */
    createNotify: function(title, body){
        return new Notification(title, {'body':body});
    },

    /**
     * @returns {void}
     */
    onCheckMail: function(){
        $.ajax({
            type: 'GET',
            url: this.feedUrl,
            dataType: 'xml'
        })
        .done(this.onDoneAtom.bind(this))
        .fail(this.onFailAtom.bind(this));
    },

    /**
     * @returns {void}
     */
    onFailAtom: function(err){
        this.createNotify('error ! ' +err.status + ' ' + err.statusText, this.url).show();
    },

    /**
     * @returns {void}
     */
    onDoneAtom: function(atom){
        var data = [];
        var _atom = $(atom);
        _atom.find('entry').each(function(){
            var entry = $(this);
            data.push({
                from: entry.find('author name').text().replace(/^(.{17}).*$/, '$1...'),
                subject: entry.find('title').text()
            });
        });

        this.badge = _atom.find('fullcount').text()|0;

        if (data.length > 0 && this.notice) {
            this.createNotify(data[0].from, data[0].subject).show();
        }
    },

    /**
     * @param {SafariValidateEvent} e
     */
    onCommand: function(e){
        if (e.command === 'cmd_mail') {
            safari.application.activeBrowserWindow.openTab().url = this.url;
            this.badge = 0;
        }
    },

    /**
     * @param {SafariExtensionSettingsChangeEvent} e
     */
    onChange: function(e){
        if (e.key === 'interval') {
            this.resetTimer();
        } else if (e.key === 'url') {
            this._url = '';
        }
    }

};

new Mail();