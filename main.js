
x=0;
y=0;
function preload() {
    mustache= loadImage("https://i.postimg.cc/T1H5zxg4/mustache.png");

}
function setup() {
    canvas = createCanvas(350, 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(350, 400)
    video.hide();

    posenet = ml5.poseNet(video, modelLoaded);
    posenet.on("pose", gotposes);
}
function modelLoaded() {
    console.log("PoseNet was  intialized");
}
function gotposes(results) {
    if (results.length > 0) {
        console.log(results)
        x = results[0].pose.nose.x;
        y = results[0].pose.nose.y;
        console.log("nose x ="+ results[0].pose.nose.x-25);
        console.log("nose y ="  + results[0].pose.nose.y);
    }
}
function draw() {
    image(video, 0, 0, 350, 400)
    image(mustache,x,y,30,30)
}
function take_snapshot() {
    save("mustache.jpeg")
}
