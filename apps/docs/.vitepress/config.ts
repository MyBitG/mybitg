import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'My Bit G',
  description:
    'Free and Open Source Bitcoin Desktop Wallet with Blockchain Explorer and Price Charts',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [{ text: 'Home', link: '/' }],
    socialLinks: [{ icon: 'github', link: 'https://github.com/MyBitG/mybitg' }]
  }
})
