```js
class MyPromise {
  constructor (func) {}
  resolve (result) {}
  reject (reason) {}
  then (onFulfulled, onRejected) {}
  static resolve (value) {
    if (value instanceof MyPromise) {
      return value
    } else if (value instanceof Object && 'then' in value) {
      return new MyPromise((resolve, reject) => {
        value.then(resolve, reject)
      })
    }
    return new MyPromise((resolve, reject) => {
      resolve(value)
    })
    
  }
  static reject (reason) {
    return new MyPromise((resolve, reject) => {
      reject(reason)
    })
  }
  catch (onRejected) {
    return this.then(undefined, onRejected)
  }
  finally (callback) {
    return this.then(callback, callback)
  }
  static all (promises) {
    return new MyPromise((resolve, reject) => {
      
      if (Array.isArray(promises)) {
        const result = []
        let count = 0
        if (promises.length === 0) {
          return resolve(promises)
        }
        promises.forEach((item, index) => {
          if (item instanceof MyPromise) {
            MyPromise.resolve(item).then(
              value => {
              count++
              result[index] = value
              count === promises.length && resolve(result)
            }, reason => {
              reject(reason)
            })
          } else {
            count++
            result[index] = item
            count === promises.length && resolve(result)
          }
        })

      } else {
        return reject(new TypeError('Argument is not iterable'))
      }

    })
  }
  static allSettled (promises) {
    return new MyPromise((resolve, reject) => {
      const result = []
      let count = 0
      if (Array.isArray(promises)) {
        if (promises.length === 0) return resolve(promises)
        promises.forEach((item, index) => {
          MyPromise.reolve(item).then(
            value => {
              count++
              result[index] = {
                status: 'fulfilled',
                value: value
              }
              count === promises.length && resolve(result)
            },
            reason => {
              count++
              result[index] = {
                status: 'rejected',
                reason: reason
              }
              count === promises.length && resolve(result)
            }
          )
        })
      } else {
        return reject(new TypeError('Argument is no iterable'))
      }
    })
  }
  static any (promises) {
    return new MyPromise((resolve, reject) => {
      const errors = []
      let count = 0
      if (Array.isArray(promises)) {
        if (promises.length === 0) return new AggregateError('All promises were rejected')
        promises.forEach((item, index) => {
          MyPromises.resolve(item).then(
            value => {
              resolve(value)
            },
            reason => {
              count++
              errors.push(reason)
              count === promises.length && reject(new AggregateError(errors))
            }
          )
        })
      } else {
        return reject(new TypeError('Argument is no iterable'))
      }
    })
  }
  static race (promises) {
    return new MyPromise((resolve, reject) => {
      if (Array.isArray(promises)) {
        if (promises.length > 0) {
          promises.forEach(item => {
            MyPromises.resolve(item).then(resolve, reject)
          })
        }
      } else {
        return reject(new TypeError('Argument is no iterable'))
      }
    })
  }
}
```