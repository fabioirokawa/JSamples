let img = new Image();
img.src = 'startExit.png';
img.onload = function() {
  //init();
};

let img2 = new Image();
img2.src = 'startExit.png';
img2.onload = function() {
  //init();
};

let canvas = document.querySelector('gameScreen');
let ctx = canvas.getContext('2d');

const scale = 6;
const width = 5;
const height = 7;
const scaledWidth = scale * width;
const scaledHeight = scale * height;




function drawFrameStart(frameX, frameY, canvasX, canvasY) 
{
    ctx.drawImage(img,
    frameX, frameY, 
    width, height,
    canvasX, canvasY, 
    scaledWidth, scaledHeight);
}

function drawFrameExit(frameX, frameY, canvasX, canvasY) 
{
    ctx.drawImage(img2,
    frameX, frameY, 
    width, height,
    canvasX, canvasY, 
    scaledWidth, scaledHeight);
}


function initStart(){
    drawFrameStart(0,0,50,50);
    drawFrameExit(0,7,70,70);
}