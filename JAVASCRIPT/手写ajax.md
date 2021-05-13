
- ES5版

```js
function ajax (config) {
  var xhr = new XMLHttpRequest();
  xhr.open('get', config.url, true);

  xhr.onload = function () {
    if (xhr.readyState !== 4 && xhr.status !== 200) return;
    config.success(xhr.responseText);
  }

  xhr.send(null);
}

ajax({
  url: 'https://api.github.com/users/chenjiezi',
  success: function (res) {
    console.log('res:', res);
  }
})
```

- ES6版

```js
function ajax (url) {
  return new Promise((resolve, reject) => {
      var xhr = new XMLHttpRequest();
      xhr.open('get', url, true);

      xhr.onload = function () {
        if (xhr.readyState !== 4 && xhr.status !== 200) return;
        resolve(xhr.responseText);
      }
      
      xhr.onerror = function (error) {
         reject(error);
      }

      xhr.send(null);
  })
}

ajax('https://api.github.com/users/chenjiezi')
.then((result) => {
	console.log('result:', result);    
})
.catch((error) => {
    console.log('error:', error);
})
```
