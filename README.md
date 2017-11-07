# kkCascader

vue组件：中国省市区级联组件 vue2.0


## 更新日志

### @1.0.4

## demo

示例（vue@2.0+） [点我](https://kuishang.github.io/kkCascader/).


## 截图

![screenshot](screenshot/01.png)
![screenshot](screenshot/02.png)

## 依赖


## 地区列表数据源
[china-dist-data](https://github.com/dai-siki/china-dist-data).


## 安装

#### npm

```shell
$ npm install  kkcascader
```

## 使用


#### 相关参数

| 名称              | 类型               | 默认             | 说明                                         |
| ----------------- | ----------------- | ---------------- | --------------------------------------------- |
| placeholder       | String            | ""               | 你懂的                                     |

#### Events

| 名称              | 类型               | 默认             | 说明                                         |
| ----------------- | ----------------- | ---------------- | --------------------------------------------- |
| change       | methods            | ""               | 选定最后一级地区后触发，返回两个参数 第一个为地区id,第二个为选中城市的文字                                     |

#### 示例(vue@2.0+)

```html
<template>
  <div id="app">
   		<label for="dist">收货地址</label>
		  <kkcascader  placeholder="请选择地址" @change="change"></kkcascader>
  </div>
</template>

<script>
 import cascader from './lib/index.js'
 Vue.use(cascader)
</script>


```
