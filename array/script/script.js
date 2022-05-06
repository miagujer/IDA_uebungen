console.log("Goddag verden!")
let number = 9 
let string = 'a string'

console.log(number)
console.log(string)

//arrays

let array = [3, 5, 67, 8, 90, 43, 23, 12, 3, 4]

// console.log(array.lenght)
// //console.log(array[2])

// for (let i = 2; i < array.lenght; i +=1){
//     console.log('showing array in position: ' + i);
//     console.log(array[i])
//     //.log('show array in position')
//     //console.log(array[i])
// }

//cmd+shift+7


//how to fill an array with random values

// let empty_array = []

// let number_of_items = 50

// for (let i = 0; i < number_of_items; i++) {
//     let random_value = Math.random()
//     empty_array.push (random_value)
// }

//console.log(empty_array)


// let's see what are objects

let object = {
    x: 100,
    y: 200,
    width: 100,
    height: 300
}

let div = document.createElement('div')
div.style.position = 'fixed'
div.style.width = object.width + 'px'
div.style.height = object.height + 'px'
div.style.top = object.y + 'px'
div.style.left = object.x + 'px'
div.style.backgroundColor = '#f33'

document.body.appendChild(div)








