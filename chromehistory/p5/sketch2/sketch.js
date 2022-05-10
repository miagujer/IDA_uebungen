let history; 
let count=0;

function setup() {
  // put setup code here
  createCanvas(window.innerWidth, window.innerHeight)
  let url = "chrome_history.json";
    loadJSON(url, loaded);
    //Zugriff auf Eigenschaften
    background(255);
    textSize(40)
    textAlign(CENTER, CENTER);
    frameRate(1);
}

function draw() {
  // put drawing code here
  background(255, 150);
  // ellipse(mouseX, mouseY, 40, 40)
  // background(0);

  
  let textGroesse = map(history[count].visitCount, 1, 20, 14, 36);
textSize(textGroesse);
    text(history[count].title, width / 2, height / 2);
    count++;
    if (count > Object.keys(history).length) {
        count = 0;
    }

}

function loaded(data){
  history=data;
  //Zugriff auf Eigenschaften
  console.log(history[0].title); 

  let aktuellestunde=15;
  deckungsgrad=Map(deckungsgrad)
}

function keyReleased() {
  if (key == 's' || key == 'S') {
      let d = new Date();
      let now = d.getFullYear() + "" + (d.getMonth() + 1) + "" + d.getDate() + "" + (d.getHours() + 1) + "-" + (d.getMinutes() + 1) + "" + (d.getSeconds() + 1) + "-" + frameCount;
      saveCanvas(now, 'png');
  }
}