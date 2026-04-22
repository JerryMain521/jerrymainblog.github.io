---
title: 'README'
description: 'The first description file.'
publishDate: '2026-04-21 17:17:28'
tags:
  - README
---

人类著名构史学家*JerryMin*曾经说过：

>这个Astro模板是我目前见过最舒适的模板了！

*JerryMin*对这个网页爱不释手，他不仅立flag说要频繁更新~~开始画饼~~，也希望给想要基于此模板进行客制化的各位提供一种方案~~又画一张~~，以及试图以最简单的方式，说明对原项目做了哪些更改以及更改的方式。

所以他就写了这样一段markdown作为参考，而我跟着他的教程，创建了此网站，遂将其搬运过来。

## 网页图标替换
> 网页图标就是最上面那个图片，最初大概是这样的：
>
> ![old_header](old_header.png)
>
> 我们的目标是变成这样：
>
> ![new_header](new_header.png)
> 下面是简单的操作步骤。

下图为<strong>示例图标</strong>，用这个网站 [favicon.io](https://favicon.io) 将其转化为`.ico`文件：

![favicon](android-chrome-192x192.png)

你会得到一个`.zip`压缩包，解压后的一堆文件是这样：
```bash
android-chrome-192x192.png
android-chrome-512x512.png
apple-touch-icon.png
favicon-16x16.png
favicon-32x32.png
favicon.ico
site.webmanifest
```
直接原封不动的复制<del>（替换）</del>到目录即可：
```bash
./public/favicon
```
## 网站的基本信息更改
### site.config.ts更改
文件地址为：
```bash
./src/site.config.ts
```
利用`Ctrl + F`查找文件的一些关键字，这里一一列出，注释都已表明在源文件，这里不作展示：
- title
```typescript
title: 'Astro Theme Pure'
title: 'JerryMain Island'
```
- author
```typescript
author: 'Pure Lab'
author: 'JerryMain'
```
- description
```typescript
description: 'Stay hungry, stay foolish'
description: 'Stay stupid, stay android'
```
- navigation
```typescript
  header: {
    menu: [
      { title: 'Blog', link: '/blog' },
      //docs是官方说明文档，可以有选择性的删除此行
      { title: 'Docs', link: '/docs' },   
      { title: 'Projects', link: '/projects' },
      { title: 'Links', link: '/links' },
      { title: 'About', link: '/about' }
    ]
  }
```
- ICP
```typescript
title: 'Moe ICP 114514'
title: 'Your ICP'
```
- GitHub Page
```typescript
social: [
  { icon: 'github', label: 'GitHub', href: 'https://github.com/cworld1/astro-theme-pure' },
  { icon: 'rss', label: 'RSS', href: '/rss.xml' }
]
```
```typescript
social: { github: 'https://github.com/JerryMain521/website' }
```
- Link
```typescript
name: 'Link', val: 'https://astro-pure.js.org/'
name: 'Link', val: 'https://jerrymain.top/'
```
- Avatar
```typescript
name: 'Avatar', val: 'https://astro-pure.js.org/favicon/favicon.ico' 
name: 'Avatar', val: 'https://jerrymain.top/favicon/favicon.ico' 
```

### about的index.astro
文件地址为：
```bash
./src/pages/about/index.astro
```
下面拆解这个文件的内容，当然如果你能看懂HTML的话就变得极其简单：
```astro
  <p>Developer / Designer</p>
  <p>
    Lorem ipsum dolor sit amet, vidit suscipit at mei. Quem denique mea id. Usu ei regione indoctum
    dissentiunt, cu meliore fuisset mei, vel quod voluptua ne. Ex dicat impedit mel, at eum oratio
    possit voluptatum.
  </p>
  <p>
    Motto: Stay hungry, Stay foolish. <Spoiler>这里可以夹私货，比如为什么要演奏春日影！</Spoiler>
  </p>
```
```astro
  <Button title='Sponsor Me' class='w-fit' href='/projects#sponsorship' variant='ahead' />
```
```astro
  {/* general-talk */}
  <h2 id='hobbies'>Hobbies</h2>
  <ul>
    <li>Lorem ipsum dolor sit amet, vidit suscipit at mei.</li>
    <li>
      Quem denique mea id. Usu ei regione indoctum dissentiunt, cu meliore fuisset mei, vel quod
      voluptua ne.
    </li>
    <li>Ex dicat impedit mel, at eum oratio possit voluptatum.</li>
    <li>Impetus fuisset ullamcorper pri cu, his posse iisque ad, aliquam honestatis usu id.</li>
  </ul>
```
```astro
  <ToolSection
    class='mb-5'
    title='Design'
    tools={[
      {
        name: 'Photoshop',
        description: 'Picture Editing',
        href: 'https://www.adobe.com/products/photoshop',
        icon: import('@/assets/tools/photoshop.svg?raw')
      }
    ]}
     ...
  />
```
```astro
  {/* social-networks */}
  <h2 id='social-networks'>Social Networks</h2>
  <p>
    Lorem ipsum dolor sit amet, vidit suscipit at mei. Quem denique mea id. Usu ei regione indoctum
    dissentiunt, cu meliore fuisset mei, vel quod voluptua ne.
  </p>
```
```astro
  <Substats
    stats={[
      {
        platform: 'GitHub',
        icon: 'github',
        link: 'https://github.com/cworld1',
        text: 'followers',
        api: 'github/cworld1'
      }
    ]}
    ...
  />
```
```astro
  {/* gossips */}
  <h2 id='gossips'>Gossips</h2>
  <Collapse title='Lorem ipsum'>
    Lorem ipsum dolor sit amet, vidit suscipit at mei. Quem denique mea id. Usu ei regione indoctum
    dissentiunt, cu meliore fuisset mei, vel quod voluptua ne. Ex dicat impedit mel, at eum oratio
    possit voluptatum.
  </Collapse>
```
```astro
  <Timeline
    events={[
      {
        date: '2024-04-29',
        content:
          'Website refactored using <a href="https://astro.build/" target="_blank">Astro</a> and <a href="https://github.com/srleom/astro-theme-resume" target="_blank">Astro Theme Resume</a>'
      }
    ]}
    ...
  />
```
```astro
  <p>
    The smooth operation and personalized customization of website also rely on the resources and
    technical support provided by the following excellent projects/service providers:
  </p>
```
```astro
    <li>
      Domain: <a href='#' target='_blank'>Vercel</a>
    </li>
```

### links的index.astro
文件地址为：
```bash
./src/pages/links/index.astro
```

### projects的index.astro
文件地址为：
```bash
./src/pages/projects/index.astro
```