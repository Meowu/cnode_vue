// 可以自定义显示内容，宽高以及显示到消失的时间差。

function toast(value, width, height, time) {
  const ele = document.createElement('div')
  ele.className = 'toast'
  const text = document.createTextNode(value)
  ele.appendChild(text)
  const csstext = `background-color: #2db4c7;width:${width}px;
  font-size:0.8em;position: absolute;top: 0;left:0;right:0;bottom:0;
  color: #fff;border: 1px solid #ddd;height:${height}px;border-radius:6px;
  text-align:center;padding: 10px 0;letter-spacing: 5px;margin:auto;font-family:'微软雅黑';`
  ele.style.cssText = csstext
  const returnNode = document.body.insertBefore(ele, null)
  setTimeout(() => {
    returnNode.remove()
  }, time)
}

export default toast = toast
