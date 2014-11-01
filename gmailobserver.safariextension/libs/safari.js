/**
 * @type {SafariNamespace}
 */
window.safari = {};
/**
 * @type {SafariActivateEvent}
 * @augments {SafariEvent}
 */
window.SafariActivateEvent = {};
/**
 * @type {SafariApplication}
 * @augments {SafariEventTarget}
 */
window.SafariApplication = {};
/**
 * @description The active browser window.
 * @readonly
 * @type {SafariBrowserWindow}
 */
window.SafariApplication.activeBrowserWindow = null;
/**
 * @description The current browser windows, in order from front to back.
 * @readonly
 * @type {Array}
 */
window.SafariApplication.browserWindows = [];
/**
 * @description An object representing Safari's Private Browsing feature.
 * @readonly
 * @type {SafariPrivateBrowsing}
 */
window.SafariApplication.privateBrowsing = null;
/**
 * @description Opens a new browser window in front of all other windows.
 * @returns {SafariBrowserWindow}
 */
window.SafariApplication.openBrowserWindow = function(){ return null; };
/**
 * @type {SafariAvailableEvent}
 * @augments {SafariEvent}
 */
window.SafariAvailableEvent = {};
/**
 * @type {SafariBeforeNavigateEvent}
 * @augments {SafariEvent}
 */
window.SafariBeforeNavigateEvent = {};
/**
 * @description The URL that the user is navigating to.
 * @readonly
 * @type {string}
 */
window.SafariBeforeNavigateEvent.url = '';
/**
 * @type {SafariBeforeSearchEvent}
 * @augments {SafariEvent}
 */
window.SafariBeforeSearchEvent = {};
/**
 * @description The query inputted by the user.
 * @readonly
 * @type {string}
 */
window.SafariBeforeSearchEvent.query = '';
/**
 * @type {SafariBrowserTab}
 * @augments {SafariEventTarget}
 */
window.SafariBrowserTab = {};
/**
 * @description The browser window containing this tab.
 * @readonly
 * @type {SafariBrowserWindow}
 */
window.SafariBrowserTab.browserWindow = null;
/**
 * @description A proxy object for the the web content displayed in the tab.
 * @readonly
 * @type {SafariWebPageProxy}
 */
window.SafariBrowserTab.page = null;
/**
 * @description The Reader view associated with this tab.
 * @readonly
 * @type {SafariReader}
 */
window.SafariBrowserTab.reader = null;
/**
 * @description The tab’s current title.
 * @readonly
 * @type {string}
 */
window.SafariBrowserTab.title = '';
/**
 * @description The URL loaded in this tab.
 * @type {string}
 */
window.SafariBrowserTab.url = '';
/**
 * @description Selects the tab.
 * @returns {void}
 */
window.SafariBrowserTab.activate = function(){};
/**
 * @description Requests that the tab should close.
 * @returns {void}
 */
window.SafariBrowserTab.close = function(){};
/**
 * @description Fetches a data URL for an image of the tab’s visible contents.
 * @param {function} callback
 * @returns {void}
 */
window.SafariBrowserTab.visibleContentsAsDataURL = function(callback){};
/**
 * @type {SafariBrowserWindow}
 * @augments {SafariEventTarget}
 */
window.SafariBrowserWindow = {};
/**
 * @description The tab currently being displayed in the window.
 * @readonly
 * @type {SafariBrowserTab}
 */
window.SafariBrowserWindow.activeTab = null;
/**
 * @description The tabs in the window.
 * @readonly
 * @type {Array}
 */
window.SafariBrowserWindow.tabs = [];
/**
 * @description A Boolean value that indicates whether the window is visible.
 * @readonly
 * @type {boolean}
 */
window.SafariBrowserWindow.visible = false;
/**
 * @description Brings the window to the front and gives it keyboard focus.
 * @returns {void}
 */
window.SafariBrowserWindow.activate = function(){};
/**
 * @description Requests that the window should close.
 * @returns {void}
 */
window.SafariBrowserWindow.close = function(){};
/**
 * @description Inserts a tab into the window.
 * @param {SafariBrowserTab} tab
 * @param {number} index
 * @returns {void}
 */
window.SafariBrowserWindow.insertTab = function(tab, index){};
/**
 * @description Opens a new tab in the window.
 * @param {string} visibility
 * @param {number} index
 * @returns {SafariBrowserTab}
 */
window.SafariBrowserWindow.openTab = function(visibility, index){ return null; };
/**
 * @type {SafariCloseEvent}
 * @augments {SafariEvent}
 */
window.SafariCloseEvent = {};
/**
 * @type {SafariCommandEvent}
 * @augments {SafariEvent}
 */
window.SafariCommandEvent = {};
/**
 * @description The command identifier of the target being dispatched.
 * @readonly
 * @type {string}
 */
window.SafariCommandEvent.command = '';
/**
 * @type {SafariContentBrowserTabProxy}
 */
window.SafariContentBrowserTabProxy = {};
/**
 * @description Dispatches a canLoad message to the browser window tab.
 * @param {event} event
 * @param {*} message
 * @returns {*}
 */
window.SafariContentBrowserTabProxy.canLoad = function(event, message){ return null; };
/**
 * @description Dispatches a message to the browser window tab.
 * @param {string} name
 * @param {*} message
 * @returns {void}
 */
window.SafariContentBrowserTabProxy.dispatchMessage = function(name, message){};
/**
 * @description Sets the user info to the appropriate context information.
 * @param {MouseEvent} event
 * @param {*} userInfo
 * @returns {void}
 */
window.SafariContentBrowserTabProxy.setContextMenuEventUserInfo = function(event, userInfo){};
/**
 * @type {SafariContentExtension}
 */
window.SafariContentExtension = {};
/**
 * @description The URI that corresponds to the root of the extension’s bundle.
 * @readonly
 * @type {string}
 */
window.SafariContentExtension.baseURI = '';
/**
 * @type {SafariContentNamespace}
 */
window.SafariContentNamespace = {};
/**
 * @description The current Safari extension.
 * @readonly
 * @type {SafariContentExtension}
 */
window.SafariContentNamespace.extension = null;
/**
 * @description The associated page object.
 * @readonly
 * @type {SafariContentWebPage}
 */
window.SafariContentNamespace.self = null;
/**
 * @type {SafariContentReader}
 * @augments {SafariEventTarget}
 */
window.SafariContentReader = {};
/**
 * @description A proxy object for the tab containing the Reader view.
 * @readonly
 * @type {SafariContentBrowserTabProxy}
 */
window.SafariContentReader.tab = null;
/**
 * @type {SafariContentWebPage}
 * @augments {SafariEventTarget}
 */
window.SafariContentWebPage = {};
/**
 * @description A proxy object for the tab containing the web content.
 * @readonly
 * @type {SafariContentBrowserTabProxy}
 */
window.SafariContentWebPage.tab = null;
/**
 * @type {SafariDeactivateEvent}
 * @augments {SafariEvent}
 */
window.SafariDeactivateEvent = {};
/**
 * @type {SafariEvent}
 */
window.SafariEvent = {};
/**
 * @description A Boolean value that indicates whether the event goes through the bubbling phase.
 * @readonly
 * @type {boolean}
 */
window.SafariEvent.bubbles = false;
/**
 * @description A Boolean value that indicates  whether the event can be canceled.
 * @readonly
 * @type {boolean}
 */
window.SafariEvent.cancelable = false;
/**
 * @description The object that the event is currently being sent to.
 * @readonly
 * @type {SafariEventTarget}
 */
window.SafariEvent.currentTarget = null;
/**
 * @description A Boolean value that indicates whether the event’s default action has been prevented.
 * @readonly
 * @type {boolean}
 */
window.SafariEvent.defaultPrevented = false;
/**
 * @description The event-handling phase that the event is in.
 * @readonly
 * @type {number}
 */
window.SafariEvent.short = 0;
/**
 * @description The target of the event.
 * @readonly
 * @type {SafariEventTarget}
 */
window.SafariEvent.target = null;
/**
 * @description The time and date that the event was created.
 * @readonly
 * @type {number}
 */
window.SafariEvent.timeStamp = 0;
/**
 * @description The type of the event.
 * @readonly
 * @type {string}
 */
window.SafariEvent.type = '';
/**
 * @description Prevents the browser from performing the default action for an event.
 * @returns {void}
 */
window.SafariEvent.preventDefault = function(){};
/**
 * @description Prevents the event from any further propagation.
 * @returns {void}
 */
window.SafariEvent.stopPropagation = function(){};
/**
 * @constant
 * @type {number}
 */
window.SafariEvent.BUBBLING_PHASE = null;
/**
 * @constant
 * @type {number}
 */
window.SafariEvent.CAPTURING_PHASE = null;
/**
 * @constant
 * @type {number}
 */
window.SafariEvent.TARGETING_PHASE = null;
/**
 * @type {SafariEventTarget}
 */
window.SafariEventTarget = {};
/**
 * @description Starts listening for the specified type of event.
 * @param {string} type
 * @param {function} listener
 * @param {boolean} useCapture
 * @returns {void}
 */
window.SafariEventTarget.addEventListener = function(type, listener, useCapture){};
/**
 * @description Stops listening for the specified type of event.
 * @param {string} type
 * @param {function} listener
 * @param {boolean} useCapture
 * @returns {void}
 */
window.SafariEventTarget.removeEventListener = function(type, listener, useCapture){};
/**
 * @type {SafariExtension}
 */
window.SafariExtension = {};
/**
 * @description All of the bars of an extension.
 * @readonly
 * @type {Array}
 */
window.SafariExtension.bars = [];
/**
 * @description The URI that corresponds to the root of the extension’s bundle.
 * @readonly
 * @type {string}
 */
window.SafariExtension.baseURI = '';
/**
 * @description The version number of the extension Safari uses to check for updates.
 * @readonly
 * @type {string}
 */
window.SafariExtension.bundleVersion = '';
/**
 * @description The version number of the extension displayed to the user in the Extensions preference pane.
 * @readonly
 * @type {string}
 */
window.SafariExtension.displayVersion = '';
/**
 * @description The extension’s global page, or null if the extension doesn’t have a global page.
 * @readonly
 * @type {SafariExtensionGlobalPage}
 */
window.SafariExtension.globalPage = null;
/**
 * @description All of the menus of an extension.
 * @readonly
 * @type {Array}
 */
window.SafariExtension.menus = [];
/**
 * @description All of the popovers of an extension.
 * @readonly
 * @type {Array}
 */
window.SafariExtension.popovers = [];
/**
 * @description The storage object for an extension’s secure settings.
 * @readonly
 * @type {SafariExtensionSecureSettings}
 */
window.SafariExtension.secureSettings = null;
/**
 * @description The storage object for an extension’s normal settings.
 * @readonly
 * @type {SafariExtensionSettings}
 */
window.SafariExtension.settings = null;
/**
 * @description All of the toolbar items of an extension.
 * @readonly
 * @type {Array}
 */
window.SafariExtension.toolbarItems = [];
/**
 * @description Adds a content script from a string.
 * @param {string} source
 * @param {Array} whitelist
 * @param {Array} blacklist
 * @param {boolean} runAtEnd
 * @returns {string}
 */
window.SafariExtension.addContentScript = function(source, whitelist, blacklist, runAtEnd){ return null; };
/**
 * @description Adds a content script from a URL.
 * @param {string} url
 * @param {Array} whitelist
 * @param {Array} blacklist
 * @param {boolean} runAtEnd
 * @returns {string}
 */
window.SafariExtension.addContentScriptFromURL = function(url, whitelist, blacklist, runAtEnd){ return null; };
/**
 * @description Adds a content style sheet from a string.
 * @param {string} source
 * @param {Array} whitelist
 * @param {Array} blacklist
 * @returns {string}
 */
window.SafariExtension.addContentStyleSheet = function(source, whitelist, blacklist){ return null; };
/**
 * @description Adds a content style sheet from a URL.
 * @param {string} url
 * @param {Array} whitelist
 * @param {Array} blacklist
 * @returns {string}
 */
window.SafariExtension.addContentStyleSheetFromURL = function(url, whitelist, blacklist){ return null; };
/**
 * @description Creates and returns a new menu.
 * @param {string} identifier
 * @returns {SafariExtensionMenu}
 */
window.SafariExtension.createMenu = function(identifier){ return null; };
/**
 * @description Creates and returns a new popover.
 * @param {string} identifier
 * @param {string} url
 * @param {number} width
 * @param {number} height
 * @returns {SafariExtensionPopover}
 */
window.SafariExtension.createPopover = function(identifier, url, width, height){ return null; };
/**
 * @description Removes the specified content script.
 * @param {string} url
 * @returns {void}
 */
window.SafariExtension.removeContentScript = function(url){};
/**
 * @description Removes all content scripts added by this extension.
 * @returns {void}
 */
window.SafariExtension.removeContentScripts = function(){};
/**
 * @description Removes the specified content style sheet.
 * @param {string} url
 * @returns {void}
 */
window.SafariExtension.removeContentStyleSheet = function(url){};
/**
 * @description Removes all content style sheets added by this extension.
 * @returns {void}
 */
window.SafariExtension.removeContentStyleSheets = function(){};
/**
 * @description Removes the specified menu.
 * @param {string} identifier
 * @returns {void}
 */
window.SafariExtension.removeMenu = function(identifier){};
/**
 * @description Removes the specified popover.
 * @param {string} identifier
 * @returns {void}
 */
window.SafariExtension.removePopover = function(identifier){};
/**
 * @type {SafariExtensionBar}
 * @augments {SafariEventTarget}
 */
window.SafariExtensionBar = {};
/**
 * @description The browser window containing the bar.
 * @readonly
 * @type {SafariBrowserWindow}
 */
window.SafariExtensionBar.browserWindow = null;
/**
 * @description The DOM window object of the bar.
 * @readonly
 * @type {Window}
 */
window.SafariExtensionBar.contentWindow = null;
/**
 * @description The unique identifier of the bar.
 * @readonly
 * @type {string}
 */
window.SafariExtensionBar.identifier = '';
/**
 * @description The title of the bar.
 * @type {string}
 */
window.SafariExtensionBar.label = '';
/**
 * @description A Boolean value that indicates whether the bar is visible.
 * @readonly
 * @type {boolean}
 */
window.SafariExtensionBar.visible = false;
/**
 * @description Hides the bar.
 * @param {boolean} doNotRemember
 * @returns {void}
 */
window.SafariExtensionBar.hide = function(doNotRemember){};
/**
 * @description Shows the bar.
 * @param {boolean} doNotRemember
 * @returns {void}
 */
window.SafariExtensionBar.show = function(doNotRemember){};
/**
 * @type {SafariExtensionContextMenu}
 */
window.SafariExtensionContextMenu = {};
/**
 * @description Returns a list of the context menu items from this extension.
 * @readonly
 * @type {Array}
 */
window.SafariExtensionContextMenu.contextMenuItems = [];
/**
 * @description Appends a menu item to the contextual menu.
 * @param {string} identifier
 * @param {string} title
 * @param {string} command
 * @returns {SafariExtensionContextMenuItem}
 */
window.SafariExtensionContextMenu.appendContextMenuItem = function(identifier, title, command){ return null; };
/**
 * @description Inserts a menu item at a specific index in the contextual menu.
 * @param {number} index
 * @param {string} identifier
 * @param {string} title
 * @param {string} command
 * @returns {SafariExtensionContextMenuItem}
 */
window.SafariExtensionContextMenu.insertContextMenuItem = function(index, identifier, title, command){ return null; };
/**
 * @type {SafariExtensionContextMenuEvent}
 * @augments {SafariEvent}
 */
window.SafariExtensionContextMenuEvent = {};
/**
 * @description The context menu being built up.
 * @readonly
 * @type {SafariExtensionContextMenu}
 */
window.SafariExtensionContextMenuEvent.contextMenu = null;
/**
 * @description Information about the current context menu event.
 * @readonly
 * @type {*}
 */
window.SafariExtensionContextMenuEvent.userInfo = null;
/**
 * @type {SafariExtensionContextMenuItem}
 * @augments {SafariEventTarget}
 */
window.SafariExtensionContextMenuItem = {};
/**
 * @description The command identifier that the context menu item sends when activated.
 * @type {string}
 */
window.SafariExtensionContextMenuItem.command = '';
/**
 * @description A Boolean value that indicates whether a context menu item is disabled.
 * @type {boolean}
 */
window.SafariExtensionContextMenuItem.disabled = false;
/**
 * @description The unique identifier of the context menu item.
 * @readonly
 * @type {string}
 */
window.SafariExtensionContextMenuItem.identifier = '';
/**
 * @description The title displayed in the context menu.
 * @type {string}
 */
window.SafariExtensionContextMenuItem.title = '';
/**
 * @type {SafariExtensionContextMenuItemCommandEvent}
 * @augments {SafariCommandEvent}
 */
window.SafariExtensionContextMenuItemCommandEvent = {};
/**
 * @description The user info object for this context menu event.
 * @readonly
 * @type {*}
 */
window.SafariExtensionContextMenuItemCommandEvent.userInfo = null;
/**
 * @type {SafariExtensionContextMenuItemValidateEvent}
 * @augments {SafariValidateEvent}
 */
window.SafariExtensionContextMenuItemValidateEvent = {};
/**
 * @description Information about the current context menu event.
 * @readonly
 * @type {*}
 */
window.SafariExtensionContextMenuItemValidateEvent.userInfo = null;
/**
 * @type {SafariExtensionGlobalPage}
 */
window.SafariExtensionGlobalPage = {};
/**
 * @description The DOM window object of the extension’s global page.
 * @readonly
 * @type {Window}
 */
window.SafariExtensionGlobalPage.contentWindow = null;
/**
 * @type {SafariExtensionMenu}
 */
window.SafariExtensionMenu = {};
/**
 * @description The unique identifier of the menu.
 * @readonly
 * @type {string}
 */
window.SafariExtensionMenu.identifier = '';
/**
 * @description The items in the menu.
 * @readonly
 * @type {Array}
 */
window.SafariExtensionMenu.menuItems = [];
/**
 * @description A Boolean value that indicates whether the menu is currently visible to the user.
 * @readonly
 * @type {boolean}
 */
window.SafariExtensionMenu.visible = false;
/**
 * @description Creates a menu item and appends it to the menu.
 * @param {string} identifier
 * @param {string} title
 * @param {string} command
 * @returns {SafariExtensionMenuItem}
 */
window.SafariExtensionMenu.appendMenuItem = function(identifier, title, command){ return null; };
/**
 * @description Creates a separator menu item and appends it to the menu.
 * @param {string} identifier
 * @returns {SafariExtensionMenuItem}
 */
window.SafariExtensionMenu.appendSeparator = function(identifier){ return null; };
/**
 * @description Creates a menu item and inserts it in the menu at the given index.
 * @param {number} index
 * @param {string} identifier
 * @param {string} title
 * @param {string} command
 * @returns {SafariExtensionMenuItem}
 */
window.SafariExtensionMenu.insertMenuItem = function(index, identifier, title, command){ return null; };
/**
 * @description Creates a separator menu item and inserts it in the menu at the given index.
 * @param {number} index
 * @param {string} identifier
 * @returns {SafariExtensionMenuItem}
 */
window.SafariExtensionMenu.insertSeparator = function(index, identifier){ return null; };
/**
 * @description Removes a menu item.
 * @param {number} index
 * @returns {void}
 */
window.SafariExtensionMenu.removeMenuItem = function(index){};
/**
 * @type {SafariExtensionMenuItem}
 * @augments {SafariEventTarget}
 */
window.SafariExtensionMenuItem = {};
/**
 * @description The state of the menu item.
 * @type {short}
 */
window.SafariExtensionMenuItem.checkedState = null;
/**
 * @description The command identifier that the menu item sends when activated.
 * @type {string}
 */
window.SafariExtensionMenuItem.command = '';
/**
 * @description A Boolean value that indicates whether a menu item is disabled.
 * @type {boolean}
 */
window.SafariExtensionMenuItem.disabled = false;
/**
 * @description The unique identifier of the menu item.
 * @readonly
 * @type {string}
 */
window.SafariExtensionMenuItem.identifier = '';
/**
 * @description The URL of the image shown next to the menu item.
 * @type {string}
 */
window.SafariExtensionMenuItem.image = '';
/**
 * @description A Boolean value that indicates whether the menu item is a separator.
 * @readonly
 * @type {boolean}
 */
window.SafariExtensionMenuItem.separator = false;
/**
 * @description The submenu displayed by this menu item.
 * @type {SafariExtensionMenu}
 */
window.SafariExtensionMenuItem.submenu = null;
/**
 * @description The title displayed in the menu.
 * @type {string}
 */
window.SafariExtensionMenuItem.title = '';
/**
 * @description A Boolean value that indicates whether the menu item is visible.
 * @readonly
 * @type {boolean}
 */
window.SafariExtensionMenuItem.visible = false;
/**
 * @constant
 * @type {number}
 */
window.SafariExtensionMenuItem.CHECKED = null;
/**
 * @constant
 * @type {number}
 */
window.SafariExtensionMenuItem.MIXED = null;
/**
 * @constant
 * @type {number}
 */
window.SafariExtensionMenuItem.UNCHECKED = null;
/**
 * @type {SafariExtensionMessageEvent}
 * @augments {SafariEvent}
 */
window.SafariExtensionMessageEvent = {};
/**
 * @description The message data.
 * @type {*}
 */
window.SafariExtensionMessageEvent.message = null;
/**
 * @description The name of the message.
 * @readonly
 * @type {string}
 */
window.SafariExtensionMessageEvent.name = '';
/**
 * @type {SafariExtensionPopover}
 * @augments {SafariEventTarget}
 */
window.SafariExtensionPopover = {};
/**
 * @description The DOM window object of the popover.
 * @readonly
 * @type {Window}
 */
window.SafariExtensionPopover.contentWindow = null;
/**
 * @description The height, in pixels, of the popover.
 * @type {number}
 */
window.SafariExtensionPopover.int = 0;
/**
 * @description The unique identifier for the popover.
 * @readonly
 * @type {string}
 */
window.SafariExtensionPopover.identifier = '';
/**
 * @description A Boolean value that indicates whether the popover is visible.
 * @readonly
 * @type {boolean}
 */
window.SafariExtensionPopover.visible = false;
/**
 * @description The width, in pixels, of the popover.
 * @type {number}
 */
window.SafariExtensionPopover.int = 0;
/**
 * @description Hides the popover.
 * @returns {void}
 */
window.SafariExtensionPopover.hide = function(){};
/**
 * @type {SafariExtensionSecureSettings}
 * @augments {SafariEventTarget}
 */
window.SafariExtensionSecureSettings = {};
/**
 * @description Removes all key-value pairs.
 * @returns {void}
 */
window.SafariExtensionSecureSettings.clear = function(){};
/**
 * @description Returns the current value of a key.
 * @param {string} key
 * @returns {*}
 */
window.SafariExtensionSecureSettings.getItem = function(key){ return null; };
/**
 * @description Removes a key.
 * @param {string} key
 * @returns {void}
 */
window.SafariExtensionSecureSettings.removeItem = function(key){};
/**
 * @description Sets the value of a key.
 * @param {string} key
 * @param {*} value
 * @returns {void}
 */
window.SafariExtensionSecureSettings.setItem = function(key, value){};
/**
 * @type {SafariExtensionSettings}
 * @augments {SafariEventTarget}
 */
window.SafariExtensionSettings = {};
/**
 * @description Removes all key-value pairs.
 * @returns {void}
 */
window.SafariExtensionSettings.clear = function(){};
/**
 * @description Returns the current value of a key.
 * @param {string} key
 * @returns {*}
 */
window.SafariExtensionSettings.getItem = function(key){ return null; };
/**
 * @description Removes a key.
 * @param {string} key
 * @returns {void}
 */
window.SafariExtensionSettings.removeItem = function(key){};
/**
 * @description Sets the value of a key.
 * @param {string} key
 * @param {*} value
 * @returns {void}
 */
window.SafariExtensionSettings.setItem = function(key, value){};
/**
 * @type {SafariExtensionSettingsChangeEvent}
 * @augments {SafariEvent}
 */
window.SafariExtensionSettingsChangeEvent = {};
/**
 * @description The key identifier of the setting that was changed.
 * @readonly
 * @type {string}
 */
window.SafariExtensionSettingsChangeEvent.key = '';
/**
 * @description The value after the settings change.
 * @readonly
 * @type {*}
 */
window.SafariExtensionSettingsChangeEvent.newValue = null;
/**
 * @description The value before the settings change.
 * @readonly
 * @type {*}
 */
window.SafariExtensionSettingsChangeEvent.oldValue = null;
/**
 * @type {SafariExtensionToolbarItem}
 * @augments {SafariEventTarget}
 */
window.SafariExtensionToolbarItem = {};
/**
 * @description The current badge number.
 * @type {number}
 */
window.SafariExtensionToolbarItem.badge = 0;
/**
 * @description The containing browser window.
 * @readonly
 * @type {SafariBrowserWindow}
 */
window.SafariExtensionToolbarItem.browserWindow = null;
/**
 * @description The command identifier that the toolbar item sends when it is clicked.
 * @type {string}
 */
window.SafariExtensionToolbarItem.command = '';
/**
 * @description A Boolean value that indicates whether the toolbar item is disabled.
 * @type {boolean}
 */
window.SafariExtensionToolbarItem.disabled = false;
/**
 * @description The unique identifier of the toolbar item.
 * @readonly
 * @type {string}
 */
window.SafariExtensionToolbarItem.identifier = '';
/**
 * @description The URL of the current image.
 * @type {string}
 */
window.SafariExtensionToolbarItem.image = '';
/**
 * @description The label of the toolbar item, as shown in the toolbar’s overflow menu.
 * @type {string}
 */
window.SafariExtensionToolbarItem.label = '';
/**
 * @description The menu associated with this toolbar item.
 * @type {SafariExtensionMenu}
 */
window.SafariExtensionToolbarItem.menu = null;
/**
 * @description The label of the toolbar item, as shown in the Customize palette.
 * @readonly
 * @type {string}
 */
window.SafariExtensionToolbarItem.paletteLabel = '';
/**
 * @description The popover associated with the toolbar item.
 * @type {SafariExtensionPopover}
 */
window.SafariExtensionToolbarItem.popover = null;
/**
 * @description The tooltip (help tag) of the toolbar item.
 * @type {string}
 */
window.SafariExtensionToolbarItem.toolTip = '';
/**
 * @description Shows the menu for the toolbar item.
 * @returns {void}
 */
window.SafariExtensionToolbarItem.showMenu = function(){};
/**
 * @description Shows the popover for the toolbar item.
 * @returns {void}
 */
window.SafariExtensionToolbarItem.showPopover = function(){};
/**
 * @description Dispatches a validate event for this toolbar item.
 * @returns {void}
 */
window.SafariExtensionToolbarItem.validate = function(){};
/**
 * @type {SafariNamespace}
 */
window.SafariNamespace = {};
/**
 * @description The Safari application.
 * @readonly
 * @type {SafariApplication}
 */
window.SafariNamespace.application = null;
/**
 * @description The current Safari extension.
 * @readonly
 * @type {SafariExtension}
 */
window.SafariNamespace.extension = null;
/**
 * @description The SafariExtensionGlobalPage or SafariExtensionBar object that owns the DOM window that this instance of the SafariNamespace class was accessed from.
 * @readonly
 * @type {*}
 */
window.SafariNamespace.self = null;
/**
 * @type {SafariNavigateEvent}
 * @augments {SafariEvent}
 */
window.SafariNavigateEvent = {};
/**
 * @type {SafariOpenEvent}
 * @augments {SafariEvent}
 */
window.SafariOpenEvent = {};
/**
 * @type {SafariPrivateBrowsing}
 */
window.SafariPrivateBrowsing = {};
/**
 * @description A Boolean value indicating whether Private Browsing is currently enabled.
 * @readonly
 * @type {boolean}
 */
window.SafariPrivateBrowsing.enabled = false;
/**
 * @type {SafariReader}
 * @augments {SafariEventTarget}
 */
window.SafariReader = {};
/**
 * @description A Boolean value that indicates whether the tab can display the Reader view.
 * @readonly
 * @type {boolean}
 */
window.SafariReader.available = false;
/**
 * @description The browser tab that contains the Reader view.
 * @readonly
 * @type {SafariBrowserTab}
 */
window.SafariReader.tab = null;
/**
 * @description A Boolean value that indicates whether the Reader view is being displayed.
 * @readonly
 * @type {boolean}
 */
window.SafariReader.visible = false;
/**
 * @description Dispatches a message to the Reader view.
 * @param {string} name
 * @param {*} message
 * @returns {void}
 */
window.SafariReader.dispatchMessage = function(name, message){};
/**
 * @description Enters the Reader view if it is available; otherwise does nothing.
 * @returns {void}
 */
window.SafariReader.enter = function(){};
/**
 * @description Exits the Reader if it is visible; otherwise does nothing.
 * @returns {void}
 */
window.SafariReader.exit = function(){};
/**
 * @type {SafariValidateEvent}
 * @augments {SafariEvent}
 */
window.SafariValidateEvent = {};
/**
 * @description The command identifier of the target being validated.
 * @readonly
 * @type {string}
 */
window.SafariValidateEvent.command = '';
/**
 * @type {SafariWebPageProxy}
 */
window.SafariWebPageProxy = {};
/**
 * @description Dispatches a message to the web content area.
 * @param {string} name
 * @param {*} message
 * @returns {void}
 */
window.SafariWebPageProxy.dispatchMessage = function(name, message){};