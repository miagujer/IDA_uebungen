function request_cat_facts(){
    let base_url = 'https://cat-fact.herokuapp.com'
    let query = '/facts'
    
    fetch(base_url + query) //first request tp remote server
    .then(function(response){ //server answer back with ok or not ok, if ok starts downloading pakets
        return response.json() //how do we format the pakets
    })
    .then(function (data) { //what do we do with the information that we collected?
        // console.log(data) //here we build another function
        build_facts(data)
    })
    .catch(function(error){
        console.log(error)
    })
}


function build_facts(data) {
    //let java script mess with your html class
    let cat_facts_div = document.querySelector('.cat-facts')
    //console.log(data)
    for(let i = 0; i < data.length; i++){
        let data_point = data[i]
       // console.log(data_point)
       //display olny in the text
       console.log(data_point['text'])
       //build virtual div in javascript
       let cat_fact = document.createElement ('div')
       //text to it
       cat_fact.textContent = data_point['text']
       //ad it to the html element that we grabed above
       cat_facts_div.appendChild(cat_fact)
    }
}


function request_coffee() {
    let base_url = 'https://coffee.alexflipnote.dev'
    let query = '/random.json'

    fetch (base_url + query)
        .then(
            function (response) {
                return response.json()
            }
        )
        .then(
            function(data) {
                build_coffee(data)
            }
        )
        .catch(
            function(error) {
                console.log(error)
            }
        )
}
function build_coffee(data) {
    console.log(data['file'])
    let coffee_div = document.querySelector('.coffee')
    let coffee_img = document.createElement('img')
    coffee_img.src = data['file'] 
    coffee_div.appendChild(coffee_img)
}

// request_coffee()

//wait until the html page is loaded
window.onload = function() {

//get the button
    let coffee_button = document.querySelector('.kafi')
    console.log(coffee_button)
// add an event listener to the button in the case click
    coffee_button.addEventListener('click', request_coffee)

}





