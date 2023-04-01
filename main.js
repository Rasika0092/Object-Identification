
img = "";

status = "";

objects = [];

function preload(){
    img = loadImage("background.PNG");
}

function setup(){
    canvas = createCanvas( 380 , 380);
    canvas.center();
    
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML  =  "Status : Detecting Objects";
}

function modelLoaded(){
    console.log("Model is loaded");
     status = true;

   objectDetector.detect(img , gotResults);
}

function gotResults(error , results){
    if (error) {
       console.log(error);

    } 
    else {
       console.log(results);
       objects = results;
    }
}

function draw(){

    
    image(img , 0 , 0 , 380 , 380);
          document.getElementById.innerHTML = "Status : Object detected";

             fill ("#FF0000");
             percent = floor(objects[i].confidence * 100);

             text (objects[i].label + " " +  percent + "%" , objects[i].x + 40, objects[i].y + 35 , 100, 100);
             textSize(20);
             noFill ();
             stroke ("#FF0000");
             rect (30, 60, 450, 350);
        }
        
    
