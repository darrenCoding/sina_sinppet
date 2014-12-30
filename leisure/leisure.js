;(function() {
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