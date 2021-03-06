---
title: MogoDB 常用操作命令
---
[[toc]]

## 数据库操作
1. 显示所有数据库
```
show dbs
```
2. 查询当前数据库
```
db
```
3. 创建、切换数据库 
```
use < dataBase_name >
```
4. 删除当前数据库
```
db dropDataBase()
```
5. 显示当前数据库所有集合
```
show collections
```
## 数据操作

### 操作字符
```
$set 更新特定字段
$unset 删除特定字段
$inc 递增、递减
$push 数组追加
$addToSet 追加不重复值
$gt( > )、$gte(>=)、$lt( < )、$lte(<=)、$ne( != )


<!-- / 内容 /  和 mySql 的 like 类似 -->
db.[ collectionName ].find( { key: /value/ })
```
### 插入
1. insert
```
db.[ collectionName ].insert( { key: value, } )
```
### 删除
1. remove
```
db.[ collectionName ].remove({}) // 删除全部
db.[ collectionName ].remove( { key: value, } ) // 指定文档
db.[ collectionName ].drop() //删除全部
```
2. drop 
```
// 删除全部
db.[ collectionName ].drop()
```
### 更新
1. update 
```
db.[ collectionName ].update( query, update, upsert?, mulit?, writeConcern? )

query: 查询条件。Object

update：需要更新的内容。Object

upsert：不存在 update 记录的话，是否插入 objNew , 默认 false

mulit：只更新找到的第一条记录，默认 false （全部更新）
```
2. save
 ```
 <!-- 主键一致便更新，否则插入 --> 
db.[ collectionName ].save( { key: value } )
 ```
3. 操作符
 ```
 <!-- 更新特定字段 -->
db.[ collectionName ].update( 
        { 'key'：{ '$gt': value } }, 
        { '$set': { key: value } } 
    )

```

### 查找
1. find
```
<!-- 查找全部 -->
db.[ collectionName ].find() 

<!-- 查找指定 key 值 -->
db.[ collectionName ].find( {}, { key: 1, } ) // 1 是必填的（非 0 就可以）

<!-- 查找指定 key1 值，并只输出 key 值  -->
db.[ collectionName ].find( { key1: value }, { key: 1, } ) 

<!-- 不输出指定内容，其他全输出 -->
db.[ collectionName ].find( {}, { key: 0, } )  

<!-- 输出 满足其一条件及输出 -->
db.[ collectionName ].find( { '$or': [ { key: value }, { key: value } ] } )  

<!-- 升序 -->
db.[ collectionName ].find( { key: value } ).sort( { key: -1 })

<!-- 降序 -->
db.[ collectionName ].find( { key: value } ).sort( { key: 1 })

<!-- 总数 -->
db.[ collectionName ].find( { key: value } ).count()

<!-- 分页查询 skip( 跳过 )，limit( 限制条数 ) -->
db.[ collectionName ].find( { key: value } ).skip( number ).limit( number )

```

