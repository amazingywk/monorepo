import { defineUserConfig, defaultTheme } from 'vuepress'

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'Hello ！',
  description: 'Hello',
  theme: defaultTheme({
    navbar: [
      // NavbarItem
      {
        text: 'Foo',
        link: '/foo/',
      },
      // NavbarGroup
      {
        text: '计算机基础',
        children: [
          {
            text: '算法与数据结构',
            link: '/computer-base/algorithm.md'
          },
          {
            text: '计算机网络',
            link: '/computer-base/internet.md'
          },
          {
            text: 'websocket',
            link: '/computer-base/websocket.md'
          },
        ],
      },
      {
        text: '大前端',
        children: [
          { text: 'javascript', link: '/web/js/' },
          {
            text: 'Vue',
            link: '/web/vue/'
          },
        ],
      },
      
      // 字符串 - 页面文件路径
      '/bar/README.md',
    ],
  }),
  port: 9090,
})