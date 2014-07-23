(function($) {
    $.goup = function(user_params) {
        var params = $.extend({
            location: "right",
            locationOffset: 20,
            bottomOffset: 10,
            containerRadius: 10,
            containerClass: 'goup-container',
            arrowClass: "goup-arrow",
            alwaysVisible: false,
            trigger: 500,
            entryAnimation: 'fade',
            goupSpeed: 'slow',
            hideUnderWidth: 500,
            containerColor: '#000',
            arrowColor: '#fff',
            title: '',
            titleAsText: false,
            titleAsTextClass: 'goup-text'
        }, user_params);

        $('body').append('<div style="display:none" class="' + params.containerClass + '"></div>');
        var container = $('.' + params.containerClass);
        $(container).html('<div>"' + params.arrowClass + '"</div>');
        var arrow = $('.' + params.arrowClass);

        var location = params.location;
        if (location != 'right' && location != 'left') {
            location = 'right';
        };

        var locationOffset = params.locationOffset;
        if (locationOffset < 0) {
            locationOffset = 0;
        };

        var bottomOffset = params.bottomOffset;
        if (bottomOffset < 0) {
            bottomOffset = 0;
        };

        var containerRadius = params.containerRadius
        if (containerRadius < 0) {
            containerRadius = 0;
        };

        var trigger = params.trigger;
        if (trigger < 0) {
            trigger = 0;
        };

        var hideUnderWidth = params.hideUnderWidth;
        if (hideUnderWidth < 0) {
            hideUnderWidth = 0;
        };

        var checkColor = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i;
        if (checkColor.test(params.containerColor)) {
            var containerColor = params.containerColor;
        } else {
            var containerColor = '#fff';
        }

        if (checkColor.test(params.arrowColor)) {
            var arrowColor = params.arrowColor;
        } else {
            var arrowColor = '#fff';
        }

        if (params.title === '') {
            params.titleAsText = false;
        }

        var containerStyle = {};
        containerStyle = {
            position: 'fixed',
            width: 40,
            height: 40,
            background: containerColor,
            cursor: 'pointer'
        };
        containerStyle['bottom'] = bottomOffset;
        containerStyle[location] = locationOffset;
        containerStyle['border-radius'] = containerRadius;
        $(container).css(containerStyle);
        if (!params.titleAsText) {
            $(container).attr('title', params.title);
        } else {
            $('body').append('<div class="' + params.titleAsTextClass + '">' + params.title + '</div>');
            var textContainer = $('.' + params.titleAsTextClass);
            $(textContainer).attr('style', $(container).attr('style'));
            $(textContainer).css('background', 'transparent')
                .css('width', 80)
                .css('height', 'auto')
                .css('text-align', 'center')
                .css(location, locationOffset - 20);
            var containerNewBottom = $(textContainer).height() + 10;
            $(container).css('bottom', '+=' + containerNewBottom + 'px');
        }

        var arrowStyle = {};
        arrowStyle = {
            width: 0,
            height: 0,
            margin: '0 auto',
            'padding-top': 13,
            'border-style': 'solid',
            'border-width': '0 10px 10px 10px',
            'border-color': 'transparent transparent ' + arrowColor + ' transparent'
        };
        $(arrow).css(arrowStyle);

    }
}(jQuery));