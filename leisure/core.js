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

var $$ = ajQuery = function(selector){
    if (!(this.instanceof ajQuery)){
        return new ajQuery(selector);        
    };
    this.selector = selector;
    return this;
};

ajQuery.fn = ajQuery.prototype = {
    selectorName:function(){
        return this.selector;
    },
    constructor : ajQuery
};

var a = new $$('aaa');