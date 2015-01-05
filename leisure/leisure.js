;(function() {
	Array.prototype.contains = function(arr,val) {
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
// 单例模式
var factory = function () {
    return function () {
        // 
    }
};
var jQuery = new factory();

// jQuery自执行模式
(function (window,undefined) {
    var jQuery = function () {
        // body...
    };
    window.jQuery = window.$ = jQuery;
})(winodw);

if (typeof module === "object" && typeof module.exports === "object") {
    module.exports = global.document ?
        factory(global, true) :
        function(w) {
            if (!w.document) {
                throw new Error("jQuery requires a window with a document");
            }
            return factory(w);
    };
} else {
    factory(global);
};