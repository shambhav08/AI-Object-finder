function setup()
{
    canvas = createCanvas(525, 450);
    canvas.center();
    video = createCapture(525, 450);
    video.hide();
}

function draw()
{
    image(video, 0, 0, 525, 450);
}