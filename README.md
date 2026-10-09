# zhaokangding.github.io

明媚的个人主页，托管于 GitHub Pages。

## 文件结构

```
├── index.html   # 主页面
├── style.css    # 样式（含明暗主题、响应式）
├── script.js    # 交互（主题切换、菜单、滚动动画）
└── README.md
```

## 本地预览

直接在浏览器里打开 `index.html` 即可，无需任何构建工具。

也可以起一个本地静态服务器（可选）：

```bash
python -m http.server 8000
# 然后访问 http://localhost:8000
```

## 上线到 GitHub Pages

1. 把代码推送到 `main` 分支：

   ```bash
   git add .
   git commit -m "init personal homepage"
   git push origin main
   ```

2. 打开仓库的 **Settings → Pages**，把 **Source** 设为 **Deploy from a branch**，
   分支选择 `main`，目录选择 `/ (root)`，保存。

3. 稍等一两分钟，访问 `https://zhaokangding.github.io` 即可看到主页。

## 自定义内容

打开 `index.html`，按需修改：

- **名字**：搜索「明媚」，替换成你的名字。
- **个人标签**：`index.html` 里搜索 `hero-tag`，改 Hero 首屏的三枚标签。
- **爱好与成就**：搜索 `id="hobbies"`，里面有 5 张卡片，改每张卡的图标、标题、描述和 `chip` 成就标签即可。
- **自我介绍**：`关于我` 区块里的段落文字。
- **项目卡片**：`项目与作品` 区块里每个 `<article class="card">` 是一张卡片，
  改标题、描述、标签，并把 `href="#"` 换成真实链接。
- **联系方式**：`联系我` 区块里的邮箱和 GitHub 链接。
- **配色**：在 `style.css` 顶部的 `:root` 里改 `--accent` 和 `--accent-2`。
