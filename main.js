  img="";
  status="";
  object=[];
  function preload(){
    img=loadImage('dog_cat.jpg');
  }
  function setup(){
   canvas=createCanvas(640,420);
   canvas.center();
   objectDetector=ml5.objectDetector('cocossd',modelLoaded);
   document.getElementById("status").innerHTML="STATUS: Detecting objects";
  }
  function modelLoaded(){
    console.log("model is loaded");
    status=true;
    objectDetector.detect(img,gotResult);
  }
  function gotResult(error,results){
    if(error){
      console.log(error);
    }
    console.log(results);
    object=results;
  }
  function draw(){
    image(img,0,0,640,420);
    if(status!=""){
      for(i=0;i<object.length;i++){
        document.getElementById("status").innerHTML="Status: Objects Detected";
        fill('#FF0000');
        percent=floor(object[i].confidence*100);
        text(object[i].label+" "+percent+"%",object[i].x,object[i].y);
        noFill();
        stroke("#FF0000");
        rect(object[i].x,object[i].y,object[i].width,object[i].height);
      }
    }
  }
