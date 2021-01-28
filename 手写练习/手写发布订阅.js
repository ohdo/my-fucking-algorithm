/**
 * 发布订阅模式：
 */
class EventBus {
	// 构造函数 设置一个存放事件的仓库
	constructor() {
		this._eventsMap = {};
	}
	// 挂载事件
	$on(eventNames, fn) {
		const { _eventsMap, $on } = this;
		if (Array.isArray(eventNames)) {
			eventNames.forEach((eventName) => $on(eventName, fn));
		} else {
			(_eventsMap[eventNames] || (_eventsMap[eventNames] = [])).push(fn);
		}
	}
	// 触发事件
	$emit(eventName, ...arg) {
		const { _eventsMap } = this;
		const cbs = _eventsMap[eventName] || [];
		cbs.forEach((cb) => cb(...arg));
	}
	// 卸载事件
	$off(eventName, fn) {
		const events = this._eventsMap[eventName] || [];
		const index = events.indexOf(fn); // 这里用 this.cache[eventName].indexOf(fn) 完全可以，封装成函数是为了向下兼容
		if (index === -1) return;
		events.splice(index, 1);
	}
	// 挂载事件（仅一次）
	$once(eventName, fn) {
		const thisArg = this;
		return this.$on(eventName, function on() {
			thisArg.$off(eventName, on);
			fn.apply(thisArg, arguments);
		});
	}
}

const eventBus = new EventBus();
{
	eventBus.$on('log', (a) => {
		console.log(a);
	});
	eventBus.$on('log', (a) => {
		console.log(a * 2);
	});
	eventBus.$on('log', (a) => {
		console.log(a * 3);
	});
	eventBus.$emit('log', 2);
	eventBus.$emit('log', 2);
}

{
	eventBus.$once('newlog', (a) => {
		console.log(a * 3);
	});
	eventBus.$emit('newlog', 2);
	eventBus.$emit('newlog', 2);
}
