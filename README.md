# please-update-cnpm

> 老http://npm.taobao.org 和 http://registry.npm.taobao.org 域名将于 2022 年 05 月 31 日零时起停止服务！ 请尽快更新到新域名

## 使用

在 `package.json` 文件的 scripts 中添加 `preinstall`：

```json
{
  "scripts": {
    "preinstall": "npx please-update-cnpm"
  }
}
```
## 效果

当使用 `npm i` 安装依赖时，如果是旧的淘宝镜像源 提示切换。


**备注**: 如果不想看到 `npx: 1 安装成功，用时 xxxx 秒`，可以使用 `--quiet` 选项(或者 `-q`):

```json
{
  "scripts": {
    "preinstall": "npx -q please-update-cnpm"
  }
}
```

**备注**: 强制镜像源:

```json
{
  "scripts": {
    "preinstall": "npx please-update-cnpm -f"
  }
}
```
## 效果

当使用 `npm i` 安装依赖时，会提示需要切换镜像源，不切换会报错。

