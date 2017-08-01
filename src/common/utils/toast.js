function toast () {
  const ele = document.createElement('div')
  ele.className = 'toast'
  const text = document.createTextNode('登录成功')
  ele.appendChild(text)
  console.log(ele);
  const csstext = `background-color: #eee;width:100px;
  font-size:1.2em;position: absolute;top: 40%;left:
  -50px;border: 1px solid #ddd;border-radius:6px;
  text-align:center;padding: 5px 0;margin-left:50%;`
  ele.style.cssText = csstext
  const returnNode = document.body.insertBefore(ele, null)
  setTimeout(() => {
    returnNode.remove()
  }, 1000)
}

export default toast = 'toast'
