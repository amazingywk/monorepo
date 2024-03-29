export const themeData = JSON.parse("{\"navbar\":[{\"text\":\"Foo\",\"link\":\"/foo/\"},{\"text\":\"计算机基础\",\"children\":[{\"text\":\"算法与数据结构\",\"link\":\"/computer-base/algorithm.md\"},{\"text\":\"计算机网络\",\"link\":\"/computer-base/internet.md\"},{\"text\":\"websocket\",\"link\":\"/computer-base/websocket.md\"}]},{\"text\":\"大前端\",\"children\":[{\"text\":\"javascript\",\"link\":\"/web/js/\"},{\"text\":\"Vue\",\"link\":\"/web/vue/\"}]},\"/bar/README.md\"],\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"logo\":null,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebar\":\"auto\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
