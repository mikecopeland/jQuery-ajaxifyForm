(function (jQuery) {

    jQuery.fn.ajaxify = function (options) {
        var formElem = jQuery(this.selector);
        var action = formElem.attr("action");
        var method = formElem.attr("method");

        var defaults = {

            onSubmit : function() {console.log("submitting " + action + " via " + method)},
            onSuccess : function(data) {console.log(data);},
            onError : function(data) {console.log("error!");}

        };

        var settings = $.extend( {}, defaults, options );

        jQuery(this.selector).submit(function(e){
            e.preventDefault();
            settings.onSubmit();

            $.ajax({
                    type: $(formElem).attr('method'),
                    url: $(formElem).attr('action'),
                    data: $(formElem).serialize(),
                    success: function (data) {
                        settings.onSuccess(data);
                    },
                    error: function (data) {
                        settings.onError(data);
                    }
             });
        });
        return this;

    };

})(jQuery);

