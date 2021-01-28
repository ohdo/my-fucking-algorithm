/**
 * 简单版本
 * 1.不支持函数
 * 2.不支持undefined（支持null）
 * 3.不支持循环引用，比如 a = {name: 'a'}; a.self = a; a2 = JSON.parse(JSON.stringify(a))
 * 4.不支持Date，会变成 ISO8601 格式的字符
 * 5.不支持正则表达式
 * 6.不支持Symbol
 */
const person = {
	fn: () => {},
  name: '宓辉义',
  mark: undefined,
	label: ['游泳', '健身'],
	reg: /[1-9A-Z]/,
	birthday: new Date(),
};
person.Symbol = Symbol('mark');

/**
 * 简单版本
 * 1.不支持函数
 * 2.不支持undefined（支持null）
 * 3.不支持循环引用，比如 a = {name: 'a'}; a.self = a; a2 = JSON.parse(JSON.stringify(a))
 * 4.不支持Date，会变成 ISO8601 格式的字符
 * 5.不支持正则表达式
 * 6.不支持Symbol
 */
{
	function deepClone(obj) {
		return JSON.parse(JSON.stringify(obj));
	}
	console.log(deepClone(person));
}

/**
 * 手动实现
 * 1.支持性：函数 正则 循环引用 Date 正则表达式 Symbol
 * 2.对象类型支持不够多（Buffer，Map，Set等都不支持）
 * 3.存在递归爆栈的风险
 * 如果要解决这些问题，实现一个”完美“的深拷贝，只能求教上百行代码的 Lodash.cloneDeep() 了 
 * https://github.com/lodash/lodash/blob/master/cloneDeep.js
 */
{
  person.self = person;
	function deepClone() {
    const catchMap = new Map();
    const baseClone = (source) => {
      if (catchMap.has(source)) return catchMap.get(source);
      if (source instanceof Object) {
        let target = {};
        if (source instanceof Array) {
          target = [];
        } else if (source instanceof Function) {
          target = function () {
            return source.apply(this, arguments);
          };
        } else if (source instanceof RegExp) {
          target = new RegExp(source.source, source.flags);
        } else if (source instanceof Date) {
          target = new Date(source);
        }
        catchMap.set(source, target);
        for (let key in source) {
          if (source.hasOwnProperty(key)) {
            target[key] = baseClone(source[key]);
          }
        }
        return target;
      }
      return source;
    };
    return baseClone(...arguments);
	}
	console.log(deepClone(person));
}
