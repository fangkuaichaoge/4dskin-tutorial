import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '4D 皮肤制作教程',
  description: '从零开始学习制作 Minecraft 4D 皮肤',
  base: '/4dskin-tutorial/',
  ignoreDeadLinks: true,
  appearance: true,
  themeConfig: {
    siteTitle: '4D Skin Tutorial',
    nav: [
      { text: '首页', link: '/' },
      { text: '快速开始', link: '/quick-start/intro' },
      { text: '4D 皮肤包格式', link: '/skin-pack-format/create' },
      { text: '制作 4D 皮肤', link: '/create-4d-skin/blockbench' },
      { text: 'YSM 模型移植', link: '/ysm-porting/uv' }
    ],
    sidebar: [
      {
        text: '快速开始',
        items: [
          { text: '认识 4D 皮肤', link: '/quick-start/intro' },
          { text: '准备工具', link: '/quick-start/setup' }
        ]
      },
      {
        text: '4D 皮肤包格式',
        items: [
          { text: '创建一个皮肤包', link: '/skin-pack-format/create' },
          { text: '认识 geometry.json', link: '/skin-pack-format/geometry' },
          { text: '认识 skins.json', link: '/skin-pack-format/skins' }
        ]
      },
      {
        text: '制作 4D 皮肤',
        items: [
          { text: 'Blockbench 建模 4D 皮肤', link: '/create-4d-skin/blockbench' }
        ]
      },
      {
        text: '新版基岩及 YSM 模型移植',
        items: [
          { text: '认识 UV', link: '/ysm-porting/uv' },
          { text: 'YSM 移植工具介绍', link: '/ysm-porting/tools' },
          { text: '如何移植 YSM 模型', link: '/ysm-porting/porting' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/fangkuaichaoge' }
    ],
    footer: {
      message: '© 2024 4D Skin Tutorial. Made with ❤️ for Minecraft players.'
    }
  }
})
