function extend (destination,source) {
	for (var property in source {
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