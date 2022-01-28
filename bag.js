img = "";
status = "";

function preload() {
    img = loadImage("tv.jpg");
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetection = ml5.objectDetector("cocossd",modelLoaded);
}

function modelLoaded() {
    console.log("Model loaded!");
    status = true;
    objectDetection.detect(img, gotresults);
}

function gotresults(error, results) {
    if (error) {
        console.error(error);
    }
    else{
        console.log(results);
    }
}