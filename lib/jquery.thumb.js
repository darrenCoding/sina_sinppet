;
(function($, window, document, undefined) {
    var pluginName = 'thumb',
        grandGlobal = {
            outputElems: [],
            inputElems: []
        },
        defaults = {
            className: 'jqthumb',
            width: 100,
            height: 100,
            position: {
                top: '50%',
                left: '50%'
            },
            source: 'src',
            showoncomplete: true,
            before: function() {},
            after: function() {},
            done: function() {}
        };

    function Plugin(element, options) {
        this.element = element;
        this.settings = $.extend({}, defaults, options);
        this.settings.width = this.settings.width.toString().replace(/px/g, '');
        this.settings.height = this.settings.height.toString().replace(/px/g, '');
        this.settings.position.top = this.settings.position.top.toString().replace(/px/g, '');
        this.settings.position.left = this.settings.position.left.toString().replace(/px/g, '');
        this.defaults = defaults;
        this._name = pluginName;
        if (typeof options == 'string') {
            if (options.toLowerCase() == 'kill') {
                this.kill(this.element);
            };
        } else {
            this.init();
        }
    };

    Plugin.prototype = {
        init: function() {

        },
        kill: function(_this) {

        },
        nonCss3Supported_method: function(_this, options) {

        },
        css3Supported_method: function(_this, options) {

        },
        updateGlobal: function(_this, obj, options) {
            // body...
        },
        checkSrcAttrName: function(_this, options) {
            // body...
        },
        percentOrPixel: function(str) {
            // body...
        },
        support_css3_attr: (function() {
            // body...
        })()
    };

    $.fn[pluginName] = function (options) {
    	// body...
    };


})(window.jQuery);