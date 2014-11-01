/**
 * Client Class
 * @constructor
 */

var Client;

(function(){

    Client = function () {
        this._toolbarItem = null;
        this.initialize();
    };

    Client.prototype = {

        /**
         * @returns {void}
         */
        initialize: function () {
            safari.extension.toolbarItems.forEach(function(item){
                if (item.identifier === 'item.mail') this._toolbarItem = item;
            }, this);
        },

        /**
         * @param {number} num
         */
        set badge (num) {
            return this._toolbarItem.badge = num;
        },

        /**
         * @returns {number}
         */
        get badge () {
            return this._toolbarItem.badge|0;
        },

        /**
         * @returns {string}
         */
        get domain () {
            return (safari.extension.settings.hasOwnProperty('domain'))
                ?  safari.extension.settings.domain : '';
        },

        /**
         * @returns {string}
         */
        get url () {
            return (this.domain !== '')
                ? 'https://mail.google.com/a/' + this.domain
                : 'https://mail.google.com/mail';
        },

        /**
         * @returns {boolean}
         */
        get notice () {
            if (safari.extension.settings.hasOwnProperty('notice')) {
                return parseInt(safari.extension.settings.notice, 10) === 1;
            } else {
                return false;
            }
        },

        /**
         * @returns {number}
         */
        get interval () {
            var min = 1000 * 60;
            if (safari.extension.settings.hasOwnProperty('interval')) {
                return min * safari.extension.settings.interval|0;
            } else {
                return min * 10;
            }
        },

        /**
         * @param {string} title
         * @param {string} body
         * @returns {object}
         */
        notification: function (title, body) {
            if (this.notice) {
                return new Notification(title, { 'body' : body });
            }
        },

        /**
         * @param {string} url
         */
        openTab: function (url) {
            safari.application.activeBrowserWindow.openTab().url = url;
        }

    };

})();
