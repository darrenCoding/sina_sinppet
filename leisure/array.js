;(function() {
    Array.prototype.isArray = function () {
        // body...
    };
    Array.prototype.observe = function () {
        // body...
    };
    Array.prototype.of = function () {
        // body...
    };
    Array.prototype.every = function () {
        // body...
    };
    Array.prototype.isArray = function () {
        // body...
    };
    Array.prototype.isArray = function () {
        // body...
    };
	Array.prototype.contains = function(arr,val) {
		// body...
	};
    Array.prototype.fill = function () {
        // body...
    };
    Array.prototype.toSource = function () {
        // body...
    };
    Array.prototype.values = function () {
        // body...
    };
    Array.prototype.keys = function () {
        // body...
    };
    Array.prototype.includes = function () {
        // body...
    };
    Array.prototype.find = function () {
        // body...
    };
    Array.prototype.indexOf = function(val) {
        for (var i = 0; i < this.length; i++) {
            if (this[i] == val) return i;
        }
        return -1;
    };
    
    Array.prototype.remove = function (val) {
    	var index = this.indexof(val);
    	if (isNan(index) || index >= this.length) {
            return false
        };
    	if (index > -1) {
    		this.splice(index,1);
    	};
    };
})();