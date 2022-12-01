```js
class EventEmitter {
  constructor() {
    this.cache = {}
    this.disposable = new Set()
  }
  on(name, fn) {
    this.cache[name] = fn
  }
  once(name, fn) {
    this.cache[name] = fn
    this.disposable.add(name)
  }
  emit(name, ...args) {
    if (this.cache[name]) {
      this.cache[name](...args)
    }
    if (this.disposable.has(name)) {
      this.disposable.delete(name)
      this.off(name)
    }
  }
  off(name) {
    delete this.cache[name]
  }
}

const eventHandle = new EventEmitter()

eventHandle.on('fn', function (a, b) {
  console.log(a, b)
})
eventHandle.once('fn2', function (a, b) {
  console.log(a, b)
})

eventHandle.emit('fn', 1, 2)
eventHandle.off('fn')
eventHandle.emit('fn', 1, 2)
eventHandle.emit('fn2', 2, 3)
eventHandle.emit('fn2', 2, 3)

```