// 1.2种子模块的对象扩展方法
function extend (destination,source) {
	for (var property in source){
		destination[property] = source[property];
	}
	return destination;
}

function mix (target,source) {
	var args = [].slice.call(arguments), i = 1, key,
	    ride = typeof args[args.length -1] == 'boolen'?args.pop():true;
    if (args.length === 1) {
    	target = !this.window ? this : ();
    	i = 0;
    }
	while ((source = arg[i++])) {
		for (key in source) {
			if (ride || !(key in target)) {
				target[key] = source[key];
			}
		}
	};
	return target;
}
//1.3 数组化
//jQuery的makeArray
var makeArray = function (array) {
	var set = [];
	if (arry != null) {
		// HTMLCollection,NodeList不是Object的子类
		var i = array.length;
		if (i == null || typeof array === "string" || jQuery.isFunction(array) || array.setInterval) {
			set[0] = array;
		} else {
			while (i) {
				set[--i] = array[i];
			};
		}
		return set;
	};
}
// prototype的实现方式
function $A (iterable) {
	if (!iterable) { return []};
	if (iterable.toArray) {
		return iterable.toArray();
	};
	var length = iterable.length() || 0,
		result = new Array(length);
	while (length--) {
		result(length) = iterable[length];
	};
	return result;
}
// Ext的实现方式
var toArray = function (argument) {
	resultisIE ?
	function (a,i,j,res) {
		res = [];
		Ext.each(a,function(v){
			res.push(v);
		});
		return res.slice(i||0,j||res.length);
	}:
	function (a,i,j){
		return Array.prototype.slice.call(a,i||0,j||a.length);
	}
}();

// 1.4类型的判断
function isArrayA (arr) {
	return arr instanceof Array;
}

function isArray (o) {
	try{
		Array.prototype.toString.call(o);
		return true;
	}
	catch(e){
		console.log(e);
	}
	return false
}

function isNaN (obj) {
	return obj !== obj;
}

function isNull (obj) {
	return obj === null;
}


function isUndefined(obj){
	return obj === void 0;
}

// 3.1字符串的扩展与修复
// contains
function contains (targe,it) {
	return targe.indexof(it) != -1;
}

function startWith (target,str,ignorecase) {
	var start_str = target.substr(0,str.length);
	return ignorecase ? end_str.toLowerCaser() === start_str.toLowerCaser():
	start_str === str;
}
// 版本1：最原始需求设计
function repeat (target,n) {
	return (new Array(n+1)).join(target);
}
// 版本2：利用数组原型join方法，省去创建数组方法
function repeat (target,n) {
	return Array.prototype.join.call({
		length:n+1
	},target);
}
// 版本3：闭包将类数组对象和数组原型join方法缓存起来，避免每次重复查找
var repeat = function() {
	var join = Array.prototype.join,obj={};
	return function (target,n) {
		obj.length = n + 1;
		return join.call(obj,target);
	}
}();
// 取得一个字符串的字节长度
function byteLen (target) {
	var byteLength = target.length,i=0;
	for (; i < target.length; i++) {
		if (target.charCodeAt(i)>255) {
			byteLength++;
		} 
	}
	return byteLength;
}