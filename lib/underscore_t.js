(function(){
	var root= this;
	var previousUnderscore = root._;
	var breaker = {};
	var ArrayProto = Array.prototype,
		ObjProto = Object.prototype,
		FunProto = Function.prototype;

 	var push = ArrayProto.push,
    	slice = ArrayProto.slice,
    	concat = ArrayProto.concat,
    	toString = ObjProto.toString,
    	hasOwnProperty = ObjProto.hasOwnProperty;

    var nativeForEach = ArrayProto.forEach,
	    nativeMap = ArrayProto.map,
	    nativeReduce = ArrayProto.reduce,
	    nativeReduceRight = ArrayProto.reduceRight,
	    nativeFilter = ArrayProto.filter,
	    nativeEvery = ArrayProto.every,
	    nativeSome  = ArrayProto.some,
	    nativeIndexOf  = ArrayProto.indexOf,
	    nativeLastIndexOf = ArrayProto.lastIndexOf,
	    nativeIsArray = Array.isArray,
	    nativeKeys = Object.keys,
	    nativeBind = FuncProto.bind;

	  var _ =function(obj){
	  	if(obj instanceof _) return obj;
	  	if(!(this.instanceof _)) return new _(obj);
	  	this._warpped = obj;
	  };

	  if(typeof exports !== 'undefined'){
	  	if(typeof module !== 'undefined' && module.exports){
	  		exports = module.exports = _;
	  	}
	  	exports._ = _ ;
	  }else{
	  	root._ = _ ;
	  };

	  _.VERSION = '1.5.0';

	  var each = _.each = _.forEach = function(obj, iterator, context) {
	    if (obj == null) return;
	    if (nativeForEach && obj.forEach === nativeForEach) {
	      obj.forEach(iterator, context);
	    } else if (obj.length === +obj.length) {
	      for (var i = 0, l = obj.length; i < l; i++) {
	        if (iterator.call(context, obj[i], i, obj) === breaker) return;
	      }
	    } else {
	      for (var key in obj) {
	        if (_.has(obj, key)) {
	          if (iterator.call(context, obj[key], key, obj) === breaker) return;
	        }
	      }
	    }
	  };

	  _.map = _.collection = function(obj,iterator,context){
	  	var results = [];
	  	if(obj == null) return results;
	  	if(nativeMap && obj.map == nativeMap) return obj.map(iterator, context);
	  	each(obj,function(value,index,list){
	  		results.push(iterator.call(context,value,index,list));
	  	});
	  	return results;
	  };

	  var reduceError = 'Reduce of empty array with no initial value';

	  _.reduce = _.inject= _.foldl =function(obj,iterator,memo,context){
	  	var initial = arguments.length >2;
	  	if(obj == null ) obj =[];
	  	if(nativeReduce && obj.reduce == nativeReduce){
	  		if (context) iterator = _.bind(iterator, context);
	  		return initial ? obj.reduce(iterator, memo) : obj.reduce(iterator);
	  	}
	  	each(obj,function(){
	  		if(!initial){
	  			memo = value;
	  			initial = true;
	  		}else{
	  			 memo = iterator.call(context, memo, value, index, list);
	  		}

	  	});
	  	if (!initial) throw new TypeError(reduceError);
	  	return memo;
	  };

});