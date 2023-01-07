img="";
objects=[];
status="";

function preload(){
    
    loadimage("car.jpeg");
    loadimage("penbox.jpeg");
    loadimage("portablecharger1.jpeg");
    loadimage("portableheadset1.jpeg");
    loadimage("portableheadset1.jpeg");
    loadimage("portablelight.jpeg");
    loadimage("remote.jpeg");
    loadimage("watch1.jpeg");
    loadimage("watch2.jpeg");
    loadimage("waterbottle.jpeg");
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
  }

  function modelLoaded() {
    console.log("Model Loaded!")
    status = true;
    objectDetector.detect(img, gotResult);
  }

  function gotResult(error, results){
    if(error){
    console.log(error);
    }
    console.log(results);
    objects = results;
          }
    
         