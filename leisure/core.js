// 单例模式
var factory = function () {
    return function () {
        // 
    }
};
var jQuery = new factory();

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