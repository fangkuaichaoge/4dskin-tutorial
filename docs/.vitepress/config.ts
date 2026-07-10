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
      { text: '快速开始', link: '/快速开始/认识4d皮肤' },
      { text: '4D 皮肤包格式', link: '/4d皮肤包格式/创建一个皮肤包' },
      { text: '制作 4D 皮肤', link: '/制作4d皮肤/blockbench制作4d皮肤' },
      { text: 'YSM 模型移植', link: '/新版基岩及ysm模型移植/认识uv' }
    ],
    sidebar: [
      {
        text: '快速开始',
        items: [
          { text: '认识 4D 皮肤', link: '/快速开始/认识4d皮肤' },
          { text: '准备工具', link: '/快速开始/准备工具' }
        ]
      },
      {
        text: '4D 皮肤包格式',
        items: [
          { text: '创建一个皮肤包', link: '/4d皮肤包格式/创建一个皮肤包' },
          { text: '认识 geometry.json', link: '/4d皮肤包格式/认识geometry.json' },
          { text: '认识 skins.json', link: '/4d皮肤包格式/认识skins.json' }
        ]
      },
      {
        text: '制作 4D 皮肤',
        items: [
          { text: 'Blockbench 建模 4D 皮肤', link: '/制作4d皮肤/blockbench制作4d皮肤' }
        ]
      },
      {
        text: '新版基岩及 YSM 模型移植',
        items: [
          { text: '认识 UV', link: '/新版基岩及ysm模型移植/认识uv' },
          { text: 'YSM 移植工具介绍', link: '/新版基岩及ysm模型移植/ysm移植工具介绍' },
          { text: '如何移植 YSM 模型', link: '/新版基岩及ysm模型移植/如何移植ysm模型' }
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
