song_1 ="";
song_2 =""

function preload()
{
    song_1 = loadSound("music2.mp3");
}

function setup()
{
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw()
{
    image(video, 0, 0, 600, 500);
}


function song_play()
{
    song_1.play();
}