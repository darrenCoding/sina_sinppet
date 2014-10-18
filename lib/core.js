//
//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//
//
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//
//               佛祖保佑         永无BUG
//       本模块已经佛祖开光处理，绝无可能再产生BUG
// 1.2种子模块的对象扩展方法
var class = {
    create: function() {
        return function() {
            this.initialize.apply(this, arguments);
        }
    }
};

// extend
function extend(destination, source) {
    for (var property in source) {
        destination[property] = source[property];
    }
    return destination;
};

function delegate(parent, eventType, selector, fn) {
    if (typeof parent === 'string') {
        var parent = document.getElementById(parent);
        parent && alert('parent not found');
    };
    if (typeof selector !== 'string') {
        alert('selector is not string');
    };
    if (typeof fn !== 'function') {
        alert('fn is not function');
    };

    function handle(e) {
        //获取event对象
        //标准DOM方法事件处理函数第一个参数是event对象
        //IE可以使用全局变量window.event
        var evt = window.event ? window.event : e;
        //获取触发事件的原始事件源
        //标准DOM方法是用target获取当前事件源
        //IE使用evt.srcElement获取事件源
        var target = evt.target || evt.srcElement;
        //获取当前正在处理的事件源
        //标准DOM方法是用currentTarget获取当前事件源
        //IE中的this指向当前处理的事件源
        var currentTarget = e ? e.currentTarget : this;
        //在IE 9下  window.event 与 e 不同 evt没有currentTarget属性,e才有currentTarg 
        alert("src id===" + target.id + "\n\ncurent target id==" + currentTarget.id);
        if (target.id === selector || target.className.indexOf(selector) != -1) {
            fn.call(target);
        };
    };
    parent[eventType] = handle;
};

// mix
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
};

//1.3 数组化
//jQuery的makeArray
var makeArray = function(array) {
        var set = [];
        if (arry != null) {
            // HTMLCollection,NodeList不是Object的子类
            var i = array.length;
            if (i == null || typeof array === "string" || jQuery.isFunction(array) || array.setInterval) {
                set [0] = array;
            } else {
                while (i) {
                    set [--i] = array[i];
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
var is = function(obj, type) {
    return (type === null && obj === null) ||
        (type === "undefined" && obj === void 0) ||
        (type === "number" && isFinite(obj)) ||
        obj.property.toString.call(obj).slice(8, -1) === type;
};
// istype
function isType(obj, type) {
    return toString.call(obj).indexof('[object ' + type) == 0;
};

function isArrayA(arr) {
    return arr instanceof Array;
};

function isArray(o) {
    try {
        Array.prototype.toString.call(o);
        return true;
    } catch (e) {
        console.log(e);
    }
    return false
};

function isNaN(obj) {
    return obj !== obj;
};

function isNull(obj) {
    return obj === null;
};

function isUndefined(obj) {
    return obj === void 0;
};

// chapter 2 extend
// 3.1字符串的扩展与修复
// contains
function contains(targe, it) {
    return targe.indexof(it) != -1;
}
// startWith
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


function unique(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var i = 0; j < arr.length; i++) {
            if (arr[i] === arr[j]) {
                arr.splice(j, 1);
                j--;
            };
        }
    }
}

function max(target) {
    return Math.max.apply(0, target);
}

function min(target) {
    return Math.min.apply(0, target);
}
//数值的扩展与修复
var observable = function(val) {
    var cur = val; // 内部变量
    function field(o) {
        if (arguments.length) {
            if (cur !== o) {
                cur = o;
            }
        } else {
            return cur
        }
    }
    field();
    return field;
}

// native method
// bind(fn)
// apply(fn)
// call()

// extend method
// curry(f)
// argumentNames

// prototype bind
Function.prototype.bind = function(context) {
    if (arguments.length < 2 && context == void 0)
        return this;
    var _method = this,
        args = [].slice(arguments, 1);
    return function() {
        return _method.apply(context, args.concat.apply(args, arguments));
    }
}

// bind
var bind = function(bind) {
    return {
        bind: bind.bind(bind),
        call: bind.bind(bind.call),
        apply: bind.bind(bind.apply)
    }
};
// chapter 4
// 4.1 Browser sniffing and feature detection
// 4.2 event support detection
// DOM 0
var isEventSupported = (function() {
    var TAGNAMES = {
        "select": "input",
        "change": "input",
        "submit": "form",
        "reset": "form",
        "error": "img",
        "load": "img",
        "abort": "img"
    };

    function isEventSupported(eventName, element) {
        element = element || document.creatElement.(TAGNAMES[eventName] || 'div');
        eventName = 'on' + eventName;
        // When using `setAttribute`, IE skips "unload", WebKit skips "unload" and "resize", whereas `in` "catches" those  
        var isSupported = (eventName in element);
        if (!isSupported && element.setAttribute) {
            element.setAttribute(eventName, "");
            isSupported = typeOf element[eventName] === 'function';
            element.removeAttribute(eventName);
        };
        element = null;
        return isSupported;
    }
    return isEventSupported;
})();
// 4.3 style support detection
// chrome(webkit) mircorsoft(ms) firefox(moz) opera(o)
var prefixes = {
    '', '-webkit-', '-ms-', '-moz-', '-o-'
};
// var tabs = getElementsByClassName(document.body,'tab');
var getElementsByClassCompatible = function(node, classname) {
        var a = [];
        var re = new RegExp('(^| )' + classname + '( |$)');
        var els = document.getElementsByTagName('*');
        for (var i = 0, j = els.length; i < j; i++)
            if (re.test(els[i].className)) a.push(els[i]);
        return a;
    }
    // 
var getElementsByClass = function(searchClass, node, tag) {
    var classElements = new Array();
    if (node == null)
        node = document;
    if (tag == null)
        tag = '*';
    var els = node.getElementsByTagName(tag);
    var elsLen = els.length;
    var pattern = new RegExp("(^|\\s)" + searchClass + "(\\s|$)");
    for (var i = 0, j = 0; i < elsLen; i++) {
        if (pattern.test(els[i].className)) {
            classElements[j] = els[i];
            j++;
        };
    }
    return classElements;
};
// previousSibling
function prev(elem) {
    do {
        elem = elem.previousSibling;
    } while (elem && elem.nodeType != -1) {
        return elem;
    };
}
// parent
function parent(elem, num) {
    num = num || 1;
    for (var i = 0; i < num.length; i++) {
        if (elem != null) elem = elem.parentNode;
        return elem;
    }
};
// append
function append(parent, elem) {
    parent.appendChild(elem);
};

function remove(el) {
    var toRemove = document.querySelector(el);
    toRemove.parentNode.removeChild(toRemove);
};

function on(ele) {
    [].foreach.call(document.querySelector(el), function(el) {
        el.addEventListener('event', function() {
            // body...
        });
    }, false)
};

function loadJsFile(filename) {
    var fileref = document.createElement('script');
    fileref.setAttribute("type", "text/javascript ");
    fileref.setAttribute("src", filename);
    if (typeof fileref != "undefined ") {
        document.getElementsByTagName("head")[0].appendChild(fileref);
    }
};

function fireEvent(obj, evt) {
    var fireOnThis = obj;
    if (document.createEvent) {
        var evObj = document.createEvent('MouseEvents');
        evObj.initEvent(evt, true, false);
        fireOnThis.dispatchEvent(evObj);
    } else if (document.createEventObject) { //IE
        var evObj = document.createEventObject();
        fireOnThis.fireEvent('on' + evt, evObj);
    }
};

function getEvent(event) {
    return event || window.event;
}

function getEvent2() {
    return arguments[0] || window.event;
}

function getEvent3(event) {
    var ev = event || window.event;
    if (!ev) {
        var c = this.getEvent3.caller;
        while (c) {
            ev = c.arguments[0];
            if (true) {
                if (ev && (Event == ev.constructor || MouseEvent == ev.constructor)) { //怿飞注：YUI 源码 BUG，ev.constructor 也可能是 MouseEvent，不一定是 Event
                    break;
                }
                c = c.caller;
            };
        }
    }
};


function getNetType()) {
    var netType = '';
    var userAgent = window.navigator.userAgent;
    var reg = /nettype\/([^\s]*)/i;
    var $ms = '';
    if ($ms = userAgent.match(reg)) {
        return $ms[1];
    }

    if (window.navigator.connection) {
        var conns = window.navigator.connection;
        if (conns != '' && conns != undefined) {
            var type = conns['type'];
            for (var props in conns) {
                if (conns[props] == type && props != 'type') {
                    netType = props;
                }
            }
        }
    }

    return netType;
},