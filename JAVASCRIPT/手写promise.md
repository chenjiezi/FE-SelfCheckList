```js
// func(this.resolve.bind(this), this.reject.bind(this)) 和 this.reject(e)
// this.reject.bind(this) 是因为 resolve 和 reject 是在外部调用的，this指向会改变，所以在 constuctor 里就要绑定this
// this.reject(e) 是在 constructor 内部执行的，所以不变
class MyPromise {
  static PENDING = 'pending'
  static FULFILLED = 'fulfilled'
  static REJECTED = 'rejected'
  constructor(func) {
    this.promiseState = MyPromise.PENDING
    this.promiseResult = null
    this.onFulfilledCallbacks = []
    this.onRejectedCallbacks = []
    try {
      func(this.resolve.bind(this), this.reject.bind(this))
    } catch (error) {
      this.reject(error)
    }
  }
  resolve(result) {
    if (this.promiseState === MyPromise.PENDING) {
      this.promiseState = MyPromise.FULFILLED
      this.promiseResult = result
      this.onFulfilledCallbacks.forEach(callback => {
        callback(result)
      })
    }
  }
  reject(reason) {
    if (this.promiseState === MyPromise.PENDING) {
      this.promiseState = MyPromise.REJECTED
      this.promiseResult = reason
      this.onRejectedCallbacks.forEach(callback => {
        callback(reason)
      })
    }
  }
  then(onFulfilled, onRejected) {
    let promise2 = new MyPromise((resolve, reject) => {
      if (this.promiseState === MyPromise.FULFILLED) {
        setTimeout(() => {
          try {
            if (typeof onFulfilled === 'function') {
              const x = onFulfilled(this.promiseResult)
              resolvePromise(promise2, x, resolve, reject)
            } else {
              resolve(this.promiseResult)
            }
          } catch (e) {
            reject(e)
          }
        })
      } else if (this.promiseState === MyPromise.REJECTED) {
        setTimeout(() => {
          try {
            if (typeof onRejected === 'function') {
              const x = onRejected(this.promiseResult)
              resolvePromise(promise2, x, resolve, reject)
            } else {
              reject(this.promiseResult)
            }
          } catch (e) {
            reject(e)
          }
        })
      } else if (this.promiseState === MyPromise.PENDING) {
        this.onFulfilledCallbacks.push(() => {
          setTimeout(() => {
            try {
              if (typeof onFulfilled === 'function') {
                const x = onFulfilled(this.promiseResult)
                resolvePromise(promise2, x, resolve, reject)
              } else {
                resolve(this.promiseResult)
              }
            } catch (e) {
              reject(e)
            }
          })
        })
        this.onRejectedCallbacks.push(() => {
          setTimeout(() => {
            try {
              if (typeof onRejected === 'function') {
                const x = onRejected(this.promiseResult)
                resolvePromise(promise2, x, resolve, reject)
              } else {
                reject(this.promiseResult)
              }
            } catch (e) {
              reject(e)
            }
          })
        })
      }
    })

    return promise2
  }
}

function resolvePromise(promise2, x, resolve, reject) {
  if (promise2 === x) {
    throw new TypeError('循环引用')
  }
  if (x instanceof MyPromise) {
    x.then(y => {
      resolvePromise(promise2, y, resolve, reject)
    }, reject)
  } else if (x !== null && (typeof x === 'object' || typeof x === 'function')) {
    try {
      var then = x.then
    } catch (e) {
      reject(e)
    }
    if (typeof then === 'function') {
      let called = false
      try {
        then.call(
          x,
          y => {
            if (called) return
            called = true
            resolvePromise(promise2, y, resolve, reject)
          },
          r => {
            if (called) return
            called = true
            reject(r)
          })
      } catch (e) {
        if (called) return
        called = true
        reject(e)
      }
    } else {
      resolve(x)
    }
  } else {
    resolve(x)
  }
}

MyPromise.deferred = function () {
  const result = {}
  result.promise = new MyPromise((resolve, reject) => {
    result.resolve = resolve
    result.reject = reject
  })
  return result
}

module.exports = MyPromise
```