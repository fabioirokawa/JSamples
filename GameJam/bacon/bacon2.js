//void ctx.clearRect(x, y, width, height);


let img = new Image();
img.src = 'sanic.png';
img.onload = function() {
  init();
};

let img2 = new Image();
img2.src = 'attdef.png';
img2.onload = function() {
  //init();
};

let img3 = new Image();
img3.src = 'attdef.png';
img3.onload = function() {
  //init();
};

let img4 = new Image();
img4.src = 'attdef.png';
img4.onload = function() {
  //init();
};

let img5 = new Image();
img5.src = 'fireball.png';
img5.onload = function() {
  //init();
};

let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

const scale = 2;
const width = 30;
const height = 40;
const scaledWidth = scale * width;
const scaledHeight = scale * height;

//drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight) s = source / d = destination
//somente 'sx,sy,dx,dy' mudam, portanto 'frameX, frameY, canvasX, canvasY'


function drawFrame(frameX, frameY, canvasX, canvasY) 
{
    ctx.drawImage(img,
    frameX * width, frameY * height, 
    width, height,
    canvasX, canvasY, 
    scaledWidth, scaledHeight);
}
  
  function init() {
    window.requestAnimationFrame(step);
    drawFrameAtt(0,0,75,20);
    drawFrameDef(0,1,75,40);
    window.requestAnimationFrame(arrowState);
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




  const scale2 = 2;
  const width2 = 35;
  const height2 = 7;
  const scaledWidth2 = scale2 * width2;
  const scaledHeight2 = scale2 * height2;

  function drawFrameAtt(frameX, frameY, canvasX, canvasY) 
{
    ctx.drawImage(img2,
    frameX * width2, frameY * height2, 
    width2, height2,
    canvasX, canvasY, 
    scaledWidth2, scaledHeight2);
}







const scale3 = 2;
const width3 = 42;
const height3 = 8;
const scaledWidth3 = scale3 * width3;
const scaledHeight3 = scale3 * height3;

function drawFrameDef(frameX, frameY, canvasX, canvasY) 
{
    ctx.drawImage(img3,
    frameX * width3, frameY * height3, 
    width3, height3,
    canvasX, canvasY, 
    scaledWidth3, scaledHeight3);
}

const scale4 = 2;
const width4 = 4;
const height4 = 7;
const scaledWidth4 = scale4 * width4;
const scaledHeight4 = scale4 * height4;

function drawFrameArrow(frameX, frameY, canvasX, canvasY) 
{
    ctx.drawImage(img4,
    frameX, frameY, 
    width4, height4,
    canvasX, canvasY, 
    scaledWidth4, scaledHeight4);
}


const scale5 = 2;
const width5 = 21;
const height5 = 11;
const scaledWidth5 = scale5 * width5;
const scaledHeight5 = scale5 * height5;

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
const mov = [70,90,110,130];

function fireMove(){
    
    
    frak++;
    if (frak < 15) {
      window.requestAnimationFrame(fireMove);
      return;
    }
    frak = 0;

    ctx.clearRect(75,20,100,100);
    drawFrameFire(27,50,mov[x],30);
    x++;
    if (x >= mov.lenght){
        x = 0;
    }
    window.requestAnimationFrame(fireMove);
}

function arrowState(){
    var type = 1;
document.addEventListener('keydown', function(event) {
    if (event.code == 'ArrowUp' ) {
        type = 1;
        ctx.clearRect(175, 40, 10, 20);
        drawFrameArrow(44,0,175,20);
    }
    else if(event.code == 'ArrowDown'){
        type = 2;
        ctx.clearRect(175, 20, 10, 20);
        drawFrameArrow(44,0,175,40);
    }
    else if(event.code == 'Enter'){
        if (type == 1){
          fireMove();
        }
    }
  });

}

