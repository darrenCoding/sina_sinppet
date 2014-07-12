(function() {
    jQuery.fn.textHover = function(options) {
        var settings = {
            Text: "your mouse is over",
            ForColor: "blue",
            BackgroundColor: "red"
        };
        var obj = jQuery.extend(settings, options);
        return this.each(function() {
            var selObject = $(this);
            var oldText = selObject.text();
            var oldBgColor = selObject.css('background-color');
            var oldColor = selObject.css('color');
            selObject.hover(function() {
                selObject.text(obj.Text);
                selObject.css('background-color', obj.BackgroundColor);
                selObject.css('color', obj.ForColor);
            }, function(argument) {
                selObject.text(oldText);
                selObject.css('background-color', oldBgColor);
                selObject.css('color', oldColor);
            });
        });
    };
})(jQuery);