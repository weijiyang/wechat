# 微信小程序开发
* import 可以引用wxml页面中的模板，但是必不能引用wxml中import的模板  及有作用域 
* include 可以将目标文件中除<template >模板中的其他整个代码完整拷贝到 include位置处
* wxs模块 使用module.exports暴露私有变量和方法 wxs和wxml文件使用wxs单标签引入
* 在其他wxs模块中引入该wxs模块 可以使用require函数 需要注意几点 1. 必须使用相对路径 2. wxs模块均为单例，wxs模块在初次引用时，会自动初始化单例对象，多页面，多个地方引用，使用的都是同一个wxs模块对象 3.如果一个wxs模块定义后未使用，则该模块不会解析和运行
*引用方式 <wxs src=""  module="moduleName" />
* eg: <view class="viewred" hover-class="hoverred" hover-start-time="20" hover-stay-time="2000" bindtap="clickred">CLICK HERE</view>
hover-class:鼠标移至样式  hover-start-time 鼠标移至开始改变样式时间 hover-stay-time 鼠标移至切换样式保留延迟消失时间

### scroll 组件
* <scroll-view scroll-y style="height: 200px;" bindscrolltoupper="upper" bindscrolltolower="lower" bindscroll="scroll" scroll-into-view="{{toView}}" scroll-top="{{scrollTop}}"> </scroll-view>   bindscrolltoupper ：滚动到顶部触发upper  bindscrolltolower：滚动到底部触发lower scroll-into-view ： 定位到视图id scroll-top 竖直滚动条位置
* 上面的例子如果是横向滚动  scroll-x  wxss需要注意   ： 
.scrollView{white-space: nowrap; }.scroll-view-item_H{width:100%; height:100px; display:inline-block; }

### swiper 组件
* eg : <swiper indicator-dots="{{indicatorDots}}" autoplay="{{autoplay}}" interval="{{interval}}" duration="{{duration}}">
* indicator-dots:是否有滚动点 autoplay: 是否自动滚动 interval:滚动间隔 duration:滚动动画时间 

### slider 组件
* <slider bindtap="intervalChange" show-value min="500" max="2000" />interval (自动滑动间隔)
* <slider bindtap="durationChange" show-value min="1000" max="10000"/>duration（动画滑动时间）
*  intervalChange : function(e){interval : e.detail.value }   js通过 e.detail.value 来获取slide的值  show-value 显示数值大小
*  slide 组件绑定事件不用bindtap  而用bindchange

### movable-area / movable-view 练习
* movable-area 为边界 内部包括可移动的movable-view 部分
* moveable-view 属性： 1.direction:vertical(纵向) horizontal(横向)all   2.inertia 是否具有惯性 3.out-of-bounds : true/false 超出移动区域是否可以移动 3. x y 定义moable-view 横纵坐标 4. damping : 阻尼系数，控制xy改变动画和会弹动画  值越大 越快  5. friction 摩擦系数 需要大于0
* 注意：movable-view 必须设置width和height属性，不设置默认为10px
movable-view 默认为绝对定位，top和left属性为0px
当movable-view小于movable-area时，movable-view的移动范围是在movable-area内；当movable-view大于movable-area时，movable-view的移动范围必须包含movable-area（x轴方向和y轴方向分开考虑）

## <cover-view></cover-view> 自定义覆盖
* 用法： <video src="" > <cover-view></cover-view></video>
* tip: 只可嵌套在原生组件map、video、canvas内，避免嵌套在其他组件内。
tip: 事件模型遵循冒泡模型，但不会冒泡到原生组件。
tip: 文本建议都套上cover-view标签，避免排版错误。
tip: 只支持基本的定位、布局、文本样式。不支持设置单边的border、opacity、background-image等。
tip: 建议子节点不要溢出父节点
tip: 暂不支持css动画。

## icon
* <icon type="类型"  color="颜色"  size="图标大小" /> 
* type : 'success', 'success_no_circle', 'info', 'warn', 'waiting', 'cancel', 'download', 'search', 'clear'
## text
* decode可以解析的有&nbsp;&lt; &gt;&amp;&apos;&ensp;&emsp;
各个操作系统的空格标准并不一致。
<text/> 组件内只支持<text/>嵌套。
除了文本节点以外的其他节点都无法长按选中。

## progress
* <progress percent="20"  show-info   stroke-width ="40" color="pink" backgrounddColor="black" active />
* 属性名   类型  默认值 说明  最低版本
percent Float   无   百分比0~100    
show-info   Boolean false   在进度条右侧显示百分比 
stroke-width    Number  6   进度条线的宽度，单位px    
color   Color   #09BB07 进度条颜色 （请使用 activeColor） 
activeColor Color       已选择的进度条的颜色  
backgroundColor Color       未选择的进度条的颜色  
active  Boolean false   进度条从左往右的动画  
active-mode String  backwards   backwards: 动画从头播；forwards：动画从上次结束点接着播   1.7.0
