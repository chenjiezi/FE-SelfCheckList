- 2XX 请求成功

  - 200	OK				 	  请求成功
  - 204    No Content          请求成功，但没资源返回
  - 206    Partial Content    请求只返回一部分资源（响应报文中，设置Content-Range字段指定范围的实体内容）

- 3XX 重定向（304灰常重要）

  - 301	Moved Permanently	永久性重定向，该状态码表示请求的资源已被分配了新的URI，以后应使用Location指定的URI，如果已经保存为书签的，这时应该更新书签。

  - 302    Found                          临时性重定向，和301类似，但是表示资源是临时性移动，已移动资源对应的URI将来还可能发生改变，因此不需要更新书签。

  - 303    See Other                    和302类似，但是标准明确规定客户端应使用get请求中Location字段指定的URI。

  - 304    Not Modified                是用来表示客户端所请求的资源和上次所请求时没有发生改变，这样服务端就不用重新发送资源的内容，从而减少了网络的负担；（ 304跟重定向没任何关系）

  - 307    Temporary Redirect      相当于302，由于浏览器对于302标准并不遵守，因此定义307来代替302。post请求不会改变为get请求。

- 4XX 客户端错误

  - 400	Bad Request		报文中存在语法错误
  - 401    Unauthrized         未经授权
  - 403    Forbidden            请求的资源被服务器拒绝访问
  - 404    Not Found           请求的资源找不到

  **ps: 401是要求验证、403是验证没通过**

- 5XX 服务端错误

  - 500	Internal Server Error   后端出现bug或者某些临时的故障
  - 503    Service Unavailable    服务器暂时处于**超负载**或正在进行**停机维护**