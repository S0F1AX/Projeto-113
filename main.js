function preLoad() {
}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();

}

function draw() {
    image(video, 0, 0, 640, 480);
    fill("yellow");
    rect(30, 20, 580, 20);
    rect(30, 440, 580, 20);
    rect(20, 30, 20, 420);
    rect(600, 30, 20, 420);
    
    fill("green");
    circle(30, 30, 50);
    circle(610, 30, 50);
    circle(30, 450, 50);
    circle(610, 450, 50);
   
}

function takeSnapshot() {
    save('studentName.png');
}
