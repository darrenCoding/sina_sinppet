// 内部静态方法
each:function (callback,args) {
	return jQuery.each(this,callback,args);
	
};


// jQuery each静态方法
each:function (obj,callback,args) {
	var value,
		i = 0,
		length = this.length,
		isArray = isArray(obj);
	if (args) {
		if (isArray) {
			// 数组
			for (; i < length; i++) {
				value = callback.apply(obj[i],args);
			};
			if (value == false) {
				break;
			};
		}else{
			// 对象
			for (i in obj) {
				value = callback.apply(obj[i],args);
			};
			if (value == false) {
				break;
			};			
		}
	};
};