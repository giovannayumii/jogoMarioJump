const mario = document.querySelector('.mario');
const jump = () =>{
    mario.classList.add('jump'); /*ele pula uma vez*/

    setTimeout(()=>{
        mario.classList.remove('jump');/*pula varias vezes*/
    },500);
}

const loop = setInterval(() =>{

    const pipePosition = pipe.offsetLeft;

    if (pipePosition <= 120){
        pipe.style.animation = 'none';
    }


},10);



/* Pular quando for pressionado qualquer tecla*/
document.addEventListener('keydown',jump);/* Executa a função, nessse caso a função JUMP*/

