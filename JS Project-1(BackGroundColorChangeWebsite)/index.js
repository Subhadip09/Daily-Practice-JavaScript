const button = document.querySelector("button")
const body = document.querySelector("body")
const color = ['red', 'green', 'blue', 'purple','yellow', 'pink', 'magenta']

// initial bg color
body.style.backgroundColor = 'violet'

// change bg color
button.addEventListener('click', changeB)

function changeB() {
    const colorIndex = parseInt(Math.random()*color.length)
    body.style.backgroundColor = color[colorIndex]
}