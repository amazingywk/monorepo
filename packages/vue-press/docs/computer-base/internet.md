### 什么是content-length

> Content-Length是HTTP消息长度, 用十进制数字表示的八位字节的数目, 是Headers中常见的一个字段. Content-Length应该是精确的, 否则就会导致异常 (特别地, HTTP1.0中这个字段可有可无).
Content-Length首部指示出报文中实体主体的字节大小. 这个大小是包含了所有内容编码的, 比如, 对文本文件进行了gzip压缩的话, Content-Length首部指的就是压缩后的大小而不是原始大小.
[引用](https://juejin.cn/post/6844903937825488909)