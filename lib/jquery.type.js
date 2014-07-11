jQuery.fn.extend({
    backspace: function(num, options) {
        var settings;
        settings = jQuery.extend({
            callback: function() {},
            keypress: function() {},
            t: 100,
            e: 0.04
        }, options);
        return this.each(function() {
            var elem;
            elem = this;
            return jQuery(elem).queue(function() {
                var attr, backsp;
                attr = elem.tagName === 'input'.toUpperCase() || elem.tagName === 'textarea'.toUpperCase() ? 'value' : 'innerHTML';
                return (backsp = function(n) {
                    if (n) {
                        elem[attr] = elem[attr].slice(0, -1);
                        settings.keypress.call(elem);
                        setTimeout((function() {
                            return backsp(n - 1);
                        }), Math.random() * settings.t);
                    } else {
                        settings.callback.call(elem);
                        jQuery(elem).dequeue();
                    }
                })(num);
            });
        });
    },
    // 
    typetype: function(txt, options) {
        var setInterval, settings;
        settings = jQuery.extend({
            callback: function() {},
            keypress: function() {},
            t: 100,
            e: 0.04
        }, options);
        interval = function(i) {
            return Math.random() * settings.t * (txt[i - 1] === txt[i] ? 1.6 : txt[i - 1] === '.' ? 12 : txt[i - 1] === '!' ? 12 : txt[i - 1] === '?' ? 12 : txt[i - 1] === '\n' ? 12 : txt[i - 1] === ',' ? 8 : txt[i - 1] === ';' ? 8 : txt[i - 1] === ':' ? 8 : txt[i - 1] === ' ' ? 3 : 2);
        };
    }
});