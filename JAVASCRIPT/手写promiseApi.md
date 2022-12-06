```js
class MyPromise {
  constructor (func) {}
  resolve (result) {}
  reject (reason) {}
  then (onFulfulled, onRejected) {}
  static resolve (value) {
    if (value instanceOf MyPromise) {
      return value
    } else if (value instanceof Object && 'then' in value) {
        return new MyPromise((resolve, reject) => {
          value.then(resolve, reject)
        })
    }

    return new MyPromise((resolve) => {
      resolve(value)
    })
  }
  static reject (reason) {
    return new Promise((resolve, reject) => {
      reject(reason)
    })
  }
  catch (onRejected) {
    return this.then(undefined, onRejected)
  }
  finally (callback) {
    return this.then(callback, callback)
  } 
}
```