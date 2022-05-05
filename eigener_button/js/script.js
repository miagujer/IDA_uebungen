console.log('godag')

let n = 0; /*schlüsselwort let und variablenname. zuweisung des werts von rechts nach links */
function buttonPressed() {
    n++; /* ist dasselbe wie n=n+1*/
    //console.log(document.getElementById("element"))
    document.getElementById("element").style.left = (n*5) + "px";
}

function neuesElement() {
    let div = document.createElement("div");
    div.classList.add('random');
    div.style.left = Math.random() * window.innerWidth + "px";
    div.style.top = Math.random() * window.innerHeight + "px";
    document.body.appendChild(div);
}

function neuesBild() {
    n++;
   let versatz = 20; /* um wieviel das bild jedesmal nach rechts rückt*/
   let myImage = new Image(100, 100);
   myImage.src = 'images/svenja.png';
   myImage = Math.random() * window.innerWidth + "px";
    myImage = Math.random() * window.innerHeight + "px";
   myImage.classList.add('bild');
   myImage.style.left = n * versatz + "px";
   document.body.appendChild(myImage);
}