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

## 提交代码 --- 本地仓库
```
# 提交代码
git commit -m '提交信息'

# 提交指定文件
git commit [file1][file2] -m '提交信息'

# 对比提交内容
git commit -v

# 当前提交代码覆盖上一次提交信息
git commit --amend -m '提交信息'

```

## 分支
```
# 查看所有本地分支
git branch

# 查看所有远程分支
git branch -r

# 创建分支
git branch [branchName]

# 创建分支，并切换到该分支
git checkout -b [branchName]

# 切换到指定分支
git checkout [branchName]

# 合并指定分支到当前分支
git merge [branchName]

# 删除分支
git branch -d [branchName]
```
## 远程
```
# 拉取远程仓库代码，并合并
git pull [remote][branch]

# 提交代码到远程仓库
git push [remote][barnch]

# 强行推送到远程仓库
git push [remote] --force
```
## 撤销
```
# 恢复暂存区文件到工作区
git checkout [file]

# 恢复指定 commit 提交的文件从暂存区文件到工作区
git checkout [commit][file]

# 恢复暂存区所有文件到工作区
git checkout .

# 重置暂存区文件，与上一次 commit 保持一致，工作区内容不变
git reset [file]

# 重置工作区和暂存区，与上一次 commit 保持一致
git reset --hard

# 重置当前分支为 commit，同时重置暂存区，工作区内容不变
git reset [commit]

# 新建 commit，覆盖指定 commit 内容
git revert [commit]
```