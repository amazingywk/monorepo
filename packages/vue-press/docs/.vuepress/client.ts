import { defineClientConfig } from '@vuepress/client'

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    console.log('enhance', app, router, siteData);
  },
  setup() {
    console.log('setup');
  },
  rootComponents: [],
})