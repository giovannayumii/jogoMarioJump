const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jump = () =>{
    mario.classList.add('jump'); /*ele pula uma vez*/

    setTimeout(()=>{
        mario.classList.remove('jump');/*pula varias vezes*/
    },500);
}

const loop = setInterval(() =>{

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    console.log(marioPosition);

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80){

        pipe.style.animation = 'none';
        pipe.syle.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.syle.bottom = `${marioPosition}px`;

        mario.src = '../imagens/game-over.png';
        mario.style.width ='75px'
        mario.style.marginLeft = '50px'
    }
},10);



/* Pular quando for pressionado qualquer tecla*/
document.addEventListener('keydown',jump);/* Executa a função, nessse caso a função JUMP*/

