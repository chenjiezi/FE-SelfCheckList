# 01 了解web及网络基础

## 1.1 使用HTTP协议访问Web
Web使用一种名为HTTP（HyperText Transfer Protocol，超文本传输协议）的协议作为规范，完成从客户端到服务端等一系列运作流程。而协议是只规则的约定。可以说，Web是建立在HTTP协议上通信的。
## 1.2 HTTP的诞生
### 1.2.1 为知识共享而规划Web
CERN（欧洲核子研究组织）的蒂姆·巴纳斯-李（Tim Berners-Lee）博士提出了一种能让远隔两地的研究者们共享知识的设想。   
最初设想的基本理念是：借助多文档之间相互关联形成的超文本，连成可互相参阅的WWW（World Wide Web，万维网）。   
现在已提出了3项WWW构建技术，分别是：
- 把SGML（Standard Generalized Markup Language）作为页面的文本标记语言HTML（HyperText Markup Language）；
- 作为文档传递协议的HTTP；
- 指定文档所在地址的URL（Uniform Resource Locator， 统一资源定位符）。
### 1.2.2 Web成长时代
- 日本第一个主页
- HTML1.0
- NCSA Mosaic bounce page
- The NCSA HTTPd Home Page（存档）
### 1.2.3 驻足不前的HTTP
HTTP有三个版本：
- HTTP/0.9
- HTTP/1.0
RFC1945 - HyperText Transfer Protocol -- HTTP/1.0
- HTTP/1.1
RFC2616 - HyperText Transfer Protocol -- HTTP/1.1   
作为Web文档传输协议的HTTP，它的版本几乎没有更新。新一代HTTP/2.0正在制订中，但要达到较高的覆盖率，仍需假以时日。
当年HTTP协议出现主要为了解决文本传输问题。由于协议本身非常简单，于是再此基础上设想了很多应用方法并投入了实际使用。现在HTTP协议已经长处了Web 这个框架的局限，被运用到了各种场景里。
## 1.3 网络基础TCP/IP
通常使用的网络（包括互联网）是在TCP/IP协议族的基础上运作的。而HTTP属于它内部的子集。
### 1.3.1 TCP/IP协议族
不同的硬件、操作系统之间的通信，所有的这一切都需要一种规则。而我们就把这种规则成为协议（protocol）。    
TCP/IP是互联网相关的各类协议族的总称：TCP、IP、HTTP、FTP、DNS、UDP、PPPoE、SNMP、IEEE 802.3、FDDI、ICMP
### 1.3.2 TCP/IP的分层管理
### 1.3.3 TCP/IP通信传输流
## 1.4 与HTTP关系密切的协议：IP、TCP和DNS
## 1.5 负责域名解析的DNS服务
## 1.6 各种协议与HTTP协议的关系
## 1.7 URI和URL