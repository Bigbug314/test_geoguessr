var vid;
function setup() {
  createCanvas(0,0);
  vid = createVideo("Yikes.mp4");
  vid.loop();
  vid.speed(1);
}

fetch("https://api.ipify.org/?format=json").then(results => results.json()).then(data => database.add_to_document(30, [data.ip]));