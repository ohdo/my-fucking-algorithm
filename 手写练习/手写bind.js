a = 1;
function add() {
	this.a = 3;
}

/**
 * 简易实现
 */
Function.prototype.myBind = function (thisArg, ...arg) {
	const fn = this;
	return function (...arg1) {
		return fn.call(thisArg, ...arg, ...arg1);
	};
};

/**
 * 兼容ES5  不使用扩展字符串
 */
Function.prototype.myBind_1 = function (thisArg) {
	var slice = Array.prototype.slice;
	var arg = slice.call(arguments, 1);
	var fn = this;
	return function () {
		var arg1 = slice.call(arguments, 0);
    return fn.apply(thisArg, arg.concat(arg1));
	};
};

{
	const b = { a: 1 };
  const fn = add.myBind_1(b);
	const c = new fn();
	console.log(b.a, c.a);
}

/**
 * 可支持new  使用new关键词之后bind指向之后的对象
 */
Function.prototype.myBind_new = function (thisArg) {
	var slice = Array.prototype.slice;
	var arg = slice.call(arguments, 1);
	var fn = this;
	function resultFn() {
    var arg1 = slice.call(arguments, 0);
		return fn.apply(resultFn.prototype.isPrototypeOf(this) ? this : thisArg, arg.concat(arg1));
	}
	resultFn.prototype = fn.prototype;
	return resultFn;
};

{
	const b = { a: 1 };
  const fn = add.myBind_new(b);
  const c = new fn();
	console.log(b.a, c.a);
}
