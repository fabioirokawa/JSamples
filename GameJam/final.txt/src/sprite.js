let img = new Image();
img.src = 'sanic.png';
img.onload = function() {
  //init();
};

let canvas = document.querySelector('gameScreen');
let ctx = canvas.getContext('2d');

const scale = 2;
const width = 31;
const height = 39;
const scaledWidth = scale * width;
const scaledHeight = scale * height;

function drawFrame(frameX, frameY, canvasX, canvasY) 
{
    ctx.drawImage(img,
    frameX, frameY, 
    width, height,
    canvasX, canvasY, 
    scaledWidth, scaledHeight);
}

const cycleLoop = [0,1,2,3,4,3,4,3,2]; //frameX ou sx
let currentLoopIndex = 0;
let frameCount = 0;

function step() {
    frameCount++;
    if (frameCount < 15) {
      window.requestAnimationFrame(step);
      return;
    }
    frameCount = 0;
    ctx.clearRect(0, 0, scaledWidth, scaledHeight); //limpar canvas
    drawFrame(cycleLoop[currentLoopIndex], 0, 0, 0);
    currentLoopIndex++;
    if (currentLoopIndex >= cycleLoop.length) {
      currentLoopIndex = 0;
    }
    window.requestAnimationFrame(step);
  }

  function init() {
    window.requestAnimationFrame(step);
  }