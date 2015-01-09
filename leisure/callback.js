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

function Callbacks (options) {
	var list = [];
	var self;
	var firingStart;
	var memory;
	function _fire (data) {
		memory = options === 'memory' && data;
		firingIndex = firingStart || 0;
		firingStart = 0;
		firingLength = list.length;
		for (; list && firingIndex < firingLength; firingIndex++) {
			if (list[firingIndex](data) == false && options === 'stopOnFalse') {
				break;
			};
		}
	};
	self = {
		add:function (fn) {
			var start = list.length;
			if (options == 'unique') {
				if (-1 == list.indexOf(fn)) {
					list.push(fn);
				};
			} else {
				list.push(fn);
			}
			
			if (memory) {
				firingStart = start;
				_fire(memory);
			};
		},
		fire:function(args) {
			if (list) {
				_fire(args);
			};
		}
	};
	return self;
};