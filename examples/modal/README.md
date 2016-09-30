## 自定义弹出提示框

1. createDocumentFragment
这个方法用于临时节点，先把内容 append 到临时节点中，然后再把临时节点 append 到文档流中，好处是只需一次操作 dom，减少性能消耗

2. getComputedStyle 方法
getComputedStyle 在这里的作用解释：
>>> We are using CSS3 for our transitions. The modal hides and shows based upon applied class names. When you add an element to the dom, and then add a class, the browser might not have interpereted the initial style, so you never see a transition from its initial state. Thats where window.getComputedStyle comes into play. Calling this forces the browser to recognize our initial state, and keeps our modal transition looking mint

