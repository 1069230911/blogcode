---
title: MarkDown基本用法
---
## 快速导航

[[toc]]

## 字体
```
*斜体文本*
**粗体文本**
***粗斜体文本***
```
::: details 显示效果
***粗斜体文本*** 
**粗体文本**  
***粗斜体文本***
:::

## 分割线
```
***
```

## 删除线
```
~~baidu.com~~
```
::: details 显示效果
~~baidu.com~~
:::

## 列表
```
无序列表  
* 列表一
* 列表二

有序列表
1. 列表三
2. 列表四

嵌套列表
1. 列表五
    - 列表五第一个元素  // 需要留4个空格
```
::: details 显示效果
* 列表一
* 列表二

1. 列表三
2. 列表四

1. 列表五
    - 列表五第一个元素
:::

## 区块
```
> 一级
>> 二级
>>> 三级
```
::: details 显示效果
> 一级
>> 二级
>>> 三级
:::

## 显示代码块
```
三个反引号 + 语言类型
    内容
三个反引号
```
::: details 显示效果
``` javascript
document.querySelectAll();
```
:::

## 链接

```
[百度链接](www.baidu.com);
```
::: details 显示效果
[百度链接](www.baidu.com);
:::

## 图片
```
![图标](链接)  
或者 使用 img 标签
```

## 表格
```
| 表头 | 表头 |
| --- | --- |
| 内容1 | 内容2 |
```
::: details 显示效果
| 表头 | 表头 |
| --- | --- |
| 内容1 | 内容2 |
:::

## 生成文件目录
```
[[toc]]  // .md文件中添加，仅限.md文件
```

## 生成警告提示
```
::: tip 提示
提示框
:::
::: warning 提示
警告提示框
:::
::: danger 提示
危险提示框
:::
::: details 提示
详情提示框(IE 下不支持)
:::
```
**显示效果**

::: tip 提示
成功提示框
:::
::: warning 提示
警告提示框
:::
::: danger 提示
危险提示框
:::
::: details 详情
详情提示框(IE 下不支持)
:::