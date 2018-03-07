# 微信小程序开发
* import 可以引用wxml页面中的模板，但是必不能引用wxml中import的模板  及有作用域 
* include 可以将目标文件中除<template >模板中的其他整个代码完整拷贝到 include位置处
* wxs模块 使用module.exports暴露私有变量和方法 wxs和wxml文件使用wxs单标签引入
* 在其他wxs模块中引入该wxs模块 可以使用require函数 需要注意几点 1. 必须使用相对路径 2. wxs模块均为单例，wxs模块在初次引用时，会自动初始化单例对象，多页面，多个地方引用，使用的都是同一个wxs模块对象 3.如果一个wxs模块定义后未使用，则该模块不会解析和运行
*引用方式 <wxs src=""  module="moduleName" />
* eg: <view class="viewred" hover-class="hoverred" hover-start-time="20" hover-stay-time="2000" bindtap="clickred">CLICK HERE</view>
hover-class:鼠标移至样式  hover-start-time 鼠标移至开始改变样式时间 hober-stay-time 鼠标移至切换样式保留延迟消失时间

* <scroll-view scroll-y style="height: 200px;" bindscrolltoupper="upper" bindscrolltolower="lower" bindscroll="scroll" scroll-into-view="{{toView}}" scroll-top="{{scrollTop}}"> </scroll-view>   bindscrolltoupper ：滚动到顶部触发upper  bindscrolltolower：滚动到底部触发lower scroll-into-view ： 定位到视图id scroll-top 竖直滚动条位置
* 上面的例子如果是横向滚动  scroll-x  wxss需要注意   ： 
.scrollView{white-space: nowrap; }.scroll-view-item_H{width:100%; height:100px; display:inline-block; }