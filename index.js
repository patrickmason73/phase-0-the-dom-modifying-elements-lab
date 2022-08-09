main.remove()

const element = document.createElement('h1')
document.body.appendChild(element)
element.setAttribute('id', 'victory')
const newHeader = document.querySelector('h1#victory')
element.innerHTML = "YOUR-NAME is the champion"