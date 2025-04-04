# 个人主页网站

一个现代化的个人主页网站，使用HTML、CSS和JavaScript构建，支持响应式设计和动态内容管理。

## 功能特点

- 🎨 现代化UI设计
- 📱 完全响应式布局
- ⚡ 流畅的动画效果
- 🔄 动态内容管理
- 📝 在线内容编辑
- 📧 联系表单
- 🌐 社交媒体集成

## 技术栈

- HTML5
- CSS3 (Flexbox & Grid)
- JavaScript (ES6+)
- LocalStorage 数据存储
- Font Awesome 图标
- Intersection Observer API

## 项目结构

```
├── index.html          # 主页面
├── admin.html          # 管理后台
├── styles.css          # 样式文件
├── script.js           # 主页面脚本
├── admin.js            # 管理后台脚本
└── README.md           # 项目文档
```

## 快速开始

1. 克隆仓库
```bash
git clone https://github.com/yourusername/your-repo-name.git
```

2. 打开项目
```bash
cd your-repo-name
```

3. 使用本地服务器运行（推荐使用 Live Server）
- 主页面：`index.html`
- 管理后台：`admin.html`

## 内容管理

### 管理后台功能

- 个人信息编辑
  - 姓名
  - 职业头衔
  - 个人介绍
  - 头像

- 技能管理
  - 添加/删除技能
  - 自定义图标
  - 技能描述

- 项目管理
  - 添加/删除项目
  - 项目图片
  - 项目描述

- 联系方式设置
  - 邮箱
  - 电话
  - 地址

## 部署

### GitHub Pages 部署

1. Fork 本仓库
2. 在仓库设置中启用 GitHub Pages
3. 选择 main 分支作为源
4. 访问 `https://yourusername.github.io/repo-name`

### 自定义域名部署

1. 在仓库设置中添加自定义域名
2. 配置DNS记录
3. 等待DNS生效

## 自定义

### 修改主题颜色

在 `styles.css` 中修改以下变量：
```css
:root {
    --primary-color: #007bff;
    --secondary-color: #6c757d;
    --background-color: #f8f9fa;
}
```

### 添加新的部分

1. 在 `index.html` 中添加新的section
2. 在 `styles.css` 中添加相应的样式
3. 在 `script.js` 中添加交互逻辑
4. 在 `admin.html` 中添加管理界面

## 浏览器支持

- Chrome (最新版)
- Firefox (最新版)
- Safari (最新版)
- Edge (最新版)

## 贡献指南

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

## 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情

## 联系方式

- 项目链接：[https://github.com/yourusername/your-repo-name](https://github.com/yourusername/your-repo-name)
- 问题反馈：[https://github.com/yourusername/your-repo-name/issues](https://github.com/yourusername/your-repo-name/issues)

## 致谢

- [Font Awesome](https://fontawesome.com/) - 图标库
- [Google Fonts](https://fonts.google.com/) - 字体
- [Placeholder.com](https://placeholder.com/) - 占位图片 