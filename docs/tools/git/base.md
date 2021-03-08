---
title: Git常用命令
---
## 快速导航

[[toc]]

## 添加/删除文件
```
# 添加文件
git add [file1][file2]

# 添加全部文件
git add .

# 删除文件
git rm [file]

# 修改文件名
git mv [file-original] [file-renamed]
```

## 提交代码
```
# 提交代码
git commit -m '提交信息'

# 提交指定文件
git commit [file1][file2] -m '提交信息'

# 对比提交内容
git commit -v

# 使用最新的一次提交
git commit --amend -m '提交信息'
```