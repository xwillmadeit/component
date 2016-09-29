## 用策略模式解决表单

1. 写的时候发现个很蠢的问题，当表单中有 button 时，默认的 type 是 submit，差点以为 return false 没用

```js
<button id="btn">submit</button>
```

If the button is within a form, the default behavior is submit.

2. label 的 for 标签对应 input 的 id，作用是当点击 label，input 自动 focus

3. forEach 循环无法 break !!!
http://stackoverflow.com/questions/6260756/how-to-stop-javascript-foreach