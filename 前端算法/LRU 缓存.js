/*
 * @Author: MIHUIYI689
 * @Date: 2021-03-31 09:15:06
 * @LastEditors: MIHUIYI689
 * @LastEditTime: 2021-03-31 09:25:07
 * @Description: File description
 * @FilePath: /my-fucking-algorithm/前端算法/LRU 缓存.js
 */
var remove = function(arr, item) {
  if (arr.length) {
      const index = arr.indexOf(item)
      if (index > -1) {
          return arr.splice(index, 1)
      }
  }
}
/**
* @param {number} capacity
*/
var LRUCache = function(capacity) {
  this.max = capacity;
  this.cacheMap = Object.create(null);
  this.keys = [];
};

/** 
* @param {number} key
* @return {number}
*/
LRUCache.prototype.get = function(key) {
  const { keys, cacheMap } = this;
  const val = cacheMap[key];
  if (val !==null && val !== undefined) {
      remove(keys, key);
      keys.push(key);
      return val;
  } else {
      return -1;
  }
};

/** 
* @param {number} key 
* @param {number} value
* @return {void}
*/
LRUCache.prototype.put = function(key, value) {
  const { keys, cacheMap } = this;
  cacheMap[key] = value;
  remove(keys, key);
  keys.push(key);
  if (keys.length > this.max) {
    const lastKey = keys.shift(0);
    cacheMap[lastKey] = null;
  }
};

/**
* Your LRUCache object will be instantiated and called as such:
* var obj = new LRUCache(capacity)
* var param_1 = obj.get(key)
* obj.put(key,value)
*/
var cache = new LRUCache( 2 /* 缓存容量 */ );

cache.put(1, 1);
cache.put(2, 2);
cache.get(1);       // 返回  1
cache.put(3, 3);    // 该操作会使得密钥 2 作废
cache.get(2);       // 返回 -1 (未找到)
cache.put(4, 4);    // 该操作会使得密钥 1 作废
cache.get(1);       // 返回 -1 (未找到)
cache.get(3);       // 返回  3
cache.get(4);       // 返回  4
console.log(cache);