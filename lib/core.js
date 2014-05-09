console.log("2222")
// 1.2种子模块的对象扩展方法
function extend(destination, source) {
	for (var property in source) {
		destination[property] = source[property];
	}
	return destination;
}

function mix(target, source) {
	var args = [].slice.call(arguments),
		i = 1,
		key,
		ride = typeof args[args.length - 1] == 'boolen' ? args.pop() : true;
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
var makeArray = function(array) {
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
	function $A(iterable) {
		if (!iterable) {
			return []
		};
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
var toArray = function(argument) {
	resultisIE ?
		function(a, i, j, res) {
			res = [];
			Ext.each(a, function(v) {
				res.push(v);
			});
			return res.slice(i || 0, j || res.length);
	} :
		function(a, i, j) {
			return Array.prototype.slice.call(a, i || 0, j || a.length);
	}
}();

// 1.4类型的判断
function isArrayA(arr) {
	return arr instanceof Array;
}

function isArray(o) {
	try {
		Array.prototype.toString.call(o);
		return true;
	} catch (e) {
		console.log(e);
	}
	return false
}

function isNaN(obj) {
	return obj !== obj;
}

function isNull(obj) {
	return obj === null;
}


function isUndefined(obj) {
	return obj === void 0;
}

// 3.1字符串的扩展与修复
// contains
function contains(targe, it) {
	return targe.indexof(it) != -1;
}

function startWith(target, str, ignorecase) {
	var start_str = target.substr(0, str.length);
	return ignorecase ? end_str.toLowerCaser() === start_str.toLowerCaser() :
		start_str === str;
}
// 版本1：最原始需求设计
function repeat(target, n) {
	return (new Array(n + 1)).join(target);
}
// 版本2：利用数组原型join方法，省去创建数组方法
function repeat(target, n) {
	return Array.prototype.join.call({
		length: n + 1
	}, target);
}
// 版本3：闭包将类数组对象和数组原型join方法缓存起来，避免每次重复查找
var repeat = function() {
	var join = Array.prototype.join,
		obj = {};
	return function(target, n) {
		obj.length = n + 1;
		return join.call(obj, target);
	}
}();


// 取得一个字符串的字节方法
// 方法1，根据Unicode编码
function byteLen(target) {
	var byteLength = target.length,
		i = 0;
	for (; i < target.length; i++) {
		if (target.charCodeAt(i) > 255) {
			byteLength++;
		}
	}
	return byteLength;
}
// 方法2，采用正则拼配,支持汉字的存储字数
function byteLen(target, fix) {
	fix = fix ? fix : 2;
	var str = new Array(fix + 1).join("-");
	return taget.replace(/[^\x00-\xff]/g, str).length; //检查是否是汉字或者全角,ASCII 编码不在0-255的字符
}


// 截取字符串,超过限定长度，添加上个点号
function truncate(target, length, truncation) {
	length = length || 30;
	truncation = truncation === void(0) ? '...' : truncation;
	return target.length > length ?
		target.slice(0, length - truncation.length) + truncation : target.length;
}

// trim方法，各种版本
// 两次正则替换，因为浏览器的内部优化，速度很快
function trim(str) {
	return str.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
}
// jquery和mootools的写法，写法优雅，性能一般
function trim(str) {
	return str.replace(/^\s+|\s+$/, '');
}
// 专家级别的方法，phpjs采纳的方法
// https://github.com/kvz/phpjs/blob/master/functions/strings/trim.js
function trim(str, charlist) {
	//  discuss at: http://phpjs.org/functions/trim/
	// original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
	// improved by: mdsjack (http://www.mdsjack.bo.it)
	// improved by: Alexander Ermolaev (http://snippets.dzone.com/user/AlexanderErmolaev)
	// improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
	// improved by: Steven Levithan (http://blog.stevenlevithan.com)
	// improved by: Jack
	//    input by: Erkekjetter
	//    input by: DxGx
	// bugfixed by: Onno Marsman
	//   example 1: trim('    Kevin van Zonneveld    ');
	//   returns 1: 'Kevin van Zonneveld'
	//   example 2: trim('Hello World', 'Hdle');
	//   returns 2: 'o Wor'
	//   example 3: trim(16, 1);
	//   returns 3: 6

	var whitespace, l = 0,
		i = 0;
	str += '';

	if (!charlist) {
		// default list
		whitespace =
			' \n\r\t\f\x0b\xa0\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u200b\u2028\u2029\u3000';
	} else {
		// preg_quote custom list
		charlist += '';
		whitespace = charlist.replace(/([\[\]\(\)\.\?\/\*\{\}\+\$\^\:])/g, '$1');
	}

	l = str.length;
	for (i = 0; i < l; i++) {
		if (whitespace.indexOf(str.charAt(i)) === -1) {
			str = str.substring(i);
			break;
		}
	}

	l = str.length;
	for (i = l - 1; i >= 0; i--) {
		if (whitespace.indexOf(str.charAt(i)) === -1) {
			str = str.substring(0, i + 1);
			break;
		}
	}

	return whitespace.indexOf(str.charAt(0)) === -1 ? str : '';
}

// 3.2数组的扩展与修复
// ECMA 262 indexof的扩展方法
if (!Array.prototype.indexOf) {
	Array.prototype.indexOf = function(searchElement, fromIndex) {
		if (this === undefined || this === null) {
			throw new TypeError('"this" is null or not defined');
		}
		var length = this.length >>> 0; // Hack to convert object.length to a UInt32
		fromIndex = +fromIndex || 0;
		if (Math.abs(fromIndex) === Infinity) {
			fromIndex = 0;
		}
		if (fromIndex < 0) {
			fromIndex += length;
			if (fromIndex < 0) {
				fromIndex = 0;
			}
		}
		for (; fromIndex < length; fromIndex++) {
			if (this[fromIndex] === searchElement) {
				return fromIndex;
			}
		}
		return -1;
	};
}
