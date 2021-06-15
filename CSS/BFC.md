# BFC

1. 什么是BFC?   
    - BFC(Block Formatting Context) "块级格式化上下文"
    - BFC是一个独立渲染区域，它丝毫不会影响到外部元素
2. 如何触发BFC？    
    - float的值不为none
    - overflow的值不为visible
    - display的值为table-cell、table-caption和inline-block还有inlie-flex之一
    - position的值不为static或者relative中的任何一个
3. BFC的应用?   
    - 两列布局：固定块float，自适应块
      - 解决方法：给另一个非浮动元素生成BFC（overflow:hidden;）
    - 解决块级元素垂直方向的边距重叠问题
      - 给其中一个元素外包裹一层容器，并触发该容器的BFC（overflow:hidden;）
    - 清除浮动
      - 当子元素浮动，元素脱标，不能撑开父元素，给父元素添加BFC（overflow:hidden;）