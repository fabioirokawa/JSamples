var canvas;//o elemento canvas sobre o qual desenharemos
var ctx;//o "contexto" da canvas que ser� utilizado (2D ou 3D)
var dx = 50;//a taxa de varia��o (velocidade) horizontal do objeto
var x = 30;//posi��o horizontal do objeto (com valor inicial)
var y = 0;//posi��o vertical do objeto (com valor inicial)
var WIDTH = 1000;//largura da �rea retangular
var HEIGHT = 340;//altura da �rea retangular
var tile1 = new Image();//Imagem que ser� carregada e desenhada na canvas
var posicao = 0;//Indicador da posi��o atual do personagem
var NUM_POSICOES = 6;//Quantidade de imagens que comp�em o movimento

function KeyDown(evt){
    switch (evt.keyCode) {
        case 39:  /*seta para direita*/
            if (x + dx < WIDTH){
                x += dx;
                posicao++;
                if(posicao == NUM_POSICOES)
                    posicao = 1;
            }
            break;            
    }

}

function Desenhar() {    
    tile1.src = posicao+".png";
    ctx.drawImage(tile1, x, y);
}

function LimparTela() {
    ctx.fillStyle = "rgb(233,233,233)";    
    ctx.beginPath();
    ctx.rect(0, 0, WIDTH, HEIGHT);
    ctx.closePath();
    ctx.fill();    
}

function Atualizar() {
    LimparTela();    
    Desenhar();
}

function Iniciar() {
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    return setInterval(Atualizar, 100);
}

window.addEventListener('keydown', KeyDown);
Iniciar();