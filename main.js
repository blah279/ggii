function setup(){
    video=createCapture(VIDEO);
    video.size(560,500);

    canvas=createCanvas(560,500);
    canvas.position(570,150);

    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotPoses);
}
function draw(){
    background('#32a852');
}
function modelLoaded(){
    console.log("Posenet is initialaized");
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
    }
}