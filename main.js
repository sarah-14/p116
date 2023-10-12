noseX = 0;
noseY = 0;

function preload()
{
       lips  = loadImage("download.jpg");
}

function draw()
{
 image(video, 0, 0, 300, 300);
 image(lips, noseX, noseY, 50, 20);
}

function setup()
{
    canvas = createCanvas(300,300);
   
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose",gotPoses);


}

function modelLoaded()
{
    console.log("Model Loaded!");
}

function gotPoses(results)
{
if(results.length > 0)
{
console.log(results);
noseX = results[0].pose.nose.x - 25;
noseY = results[0].pose.nose.y + 15;
}
}

function take_snapshot()
{
    save("myfilterimage.png");
}
