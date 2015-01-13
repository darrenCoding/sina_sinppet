jQuery.extend ({
	Deferred:function (func) {
		var tuples:[
			['resolve','done',jQuery.callbacks('once memory'),'resolved'],
			['reject','fail',jQuery.callbacks('once memory'),'rejected'],
			['notify','progress',jQuery.callbacks('memory')],
		],
		state = 'pending',
		promise = {
			state:function () {},
			always:function () {},
			then:function () {},
			promise:function (obj) {}
		},
		deferred = {},
		promise.pipe = promise.then;
		jQuery.each(tuples,function (i,tuple) {
			deferred[tuples[0]] = function () {
				// body...
			}
		});

	},
	when:function (func) {
		return deferred.promise();
	}
});

