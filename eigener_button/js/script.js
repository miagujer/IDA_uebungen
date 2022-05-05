console.log('godag')

let n = 0; /*schlüsselwort let und variablenname. zuweisung des werts von rechts nach links */
function buttonPressed() {
    n++; /* ist dasselbe wie n=n+1*/
    //console.log(document.getElementById("element"))
    document.getElementById("element").style.left = (n*5) + "px";
}

function neuesElement() {
    let div = document.createElement("div");
    div.classList.add('konfetti');
    div.style.left = Math.random() * window.innerWidth + "px";
    div.style.top = Math.random() * window.innerHeight + "px";
    document.body.appendChild(div);
}

function neuesBild() {
   let myImage = new Image(100, 100)
   myImage.src = 'images/svenja.png';
   myImage.style.left = Math.random() * window.innerWidth + "px";
    myImage.style.top = Math.random() * window.innerHeight + "px";
   myImage.classList.add('bild');
   document.body.appendChild(myImage);
}





