let mouse = []
let max = 50

document.onmousemove = function (e) {
    let pos_x = e.clientX
    let pos_y = e.clientY

    let object = {
        x: pos_x,
        y: pos_y
    }

if(mouse.length > max) {
    console.log('array is filled up!')
    mouse.shift()
  
}
mouse.push(object)

}



let pointer = document.getElementById('pointer')
pointer.style.position = 'fixed'
console.log(pointer)

let index = 0
window.requestAnimationFrame(animate)

function animate() {
    window.requestAnimationFrame(animate)
    // console.log('animate!')
    
    // console.log(mouse[index])
    // console.log(index)

if (mouse.length > 0) {
    pointer.style.left = mouse[index].x + 'px'
    pointer.style.top = mouse[index].y + 'px'
}

    index++
    if (index >= mouse.length) {
        index = 0
    }

    
}
