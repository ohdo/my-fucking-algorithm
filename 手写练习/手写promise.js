/**
 * Promise/A+规范  https://www.ituring.com.cn/article/66566
 */

const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';
class myPromise {
  constructor(executor) {
    this.value = undefined; // promise值 - 成功状态
    this.reason = undefined; // promise值 - 失败状态
    this.status = PENDING; // 初始化状态 pending

    const resolve = value => {
      if (this.status === PENDING) {
        this.status = FULFILLED;
        this.renson = value;
      }
    };

    const reject = renson => {
      if (this.status === PENDING) {
        this.status = REJECTED;
        this.renson = renson;
      }
    };
    executor(resolve, reject);
  }
  then(onFulfilled, onRejected) {
    const { status } = this;
    if (status === FULFILLED) {
      onFulfilled(this.value);
    } else if (status === REJECTED) {
      onRejected(this.value);
    }
  }
  catch() {}
  finally() {}
}

myPromise.prototype.all = () => {};
myPromise.prototype.race = () => {};
