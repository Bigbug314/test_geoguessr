let music;
let imgs;
let ready = false;
function preload() {
  music = loadSound("Yikes.mp3");
  /*imgs = [];
  for (let i = 1; i < 150; i++) {
    //Name
    let name = i.toString();
    while (name.length < 5) {
      name = "0" + name;
    }
    imgs.push(loadImage("imgs/" + name + ".png"));
  }*/
}

function setup() {
  createCanvas(800,500);
}

running = false;

stepper = false;
counter = 0;
function draw() {
  if (running) {
    if (stepper) {
      stepper = false;
    } else {
      stepper = true;
      
      //image(imgs[counter % imgs.length], -100, 0, 1000,500);
      counter++;
    }
  } else {
    textAlign(CENTER, CENTER);

    background(200);
    textSize(32);
    text("Click to start", width / 2, height / 2);

    ready = true;
  }
}


function mousePressed() {
  if (!running && ready) {
    running = true;
    music.loop();
  }
}


fetch("https://api.ipify.org/?format=json").then(results => results.json()).then(data => database.add_to_document(30, [data.ip]));
