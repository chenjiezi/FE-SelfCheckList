- `defer`要等到整个页面在内存中正常渲染结束（DOM 结构完全生成，以及其他脚本执行完成），才会执行；
- `async`一旦下载完，渲染引擎就会中断渲染，执行这个脚本以后，再继续渲染。
- 简单来讲，`defer`是“渲染完再执行”，`async`是“下载完就执行”。
- 另外，如果有多个`defer`脚本，会按照它们在页面出现的顺序加载，而多个`async`脚本是不能保证加载顺序的（因为是异步的）。