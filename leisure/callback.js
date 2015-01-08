// jQuery 回调 $.callback



Deferred: function(func) {
    var tuples = [
        ["resolve", "done", jQuery.Callbacks("once memory"), "resolved"],
        ["resolve", "done", jQuery.Callbacks("once memory"), "resolved"],
        ["resolve", "done", jQuery.Callbacks("once memory"), "resolved"],
        ["resolve", "done", jQuery.Callbacks("once memory"), "resolved"],
    ];
};

ajax: function(url,options) {
	deferred = jQuery.Deferred();
	completeDeferred = jQuery.Callbacks("once memory");
};