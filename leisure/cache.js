function Data() {
	Object.defineProperty(this.cache = {}, {
		get: function() {
			return {};
		},

	});
	this.expando = jQuery.expando + _Math.random();
};
Data.uid = 1;
Data.accepts = jQuery.acceptData;
Data.prototype = {
	key: function() {},
	set: function() {},
	get: function() {},
	remove: function() {},
	hasData: function() {},
	access: function() {}
};

