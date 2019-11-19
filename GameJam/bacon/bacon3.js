let img5 = new Image();
img5.src = 'startExit.png';
img5.onload = function() {
  init();
};



let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

const scale5 = 2;
const width5 = 29;
const height5 = 7;
const scaledWidth5 = scale5 * width5;
const scaledHeight5 = scale5 * height5;

function init(){
    fireMove();
}



function drawFrameFire(frameX, frameY, canvasX, canvasY) 
{
    ctx.drawImage(img5,
    frameX, frameY, 
    width5, height5,
    canvasX, canvasY, 
    scaledWidth5, scaledHeight5);
}

let x = 0;
let frak = 0;

function fireMove(){
    frak++;
    if (frak < 15) {
      window.requestAnimationFrame(fireMove);
      return;
    }
    frak = 0;

    ctx.clearRect(0,0,canvas.width,canvas.height);
    drawFrameFire(0,0,150,100);

    window.requestAnimationFrame(fireMove);
}