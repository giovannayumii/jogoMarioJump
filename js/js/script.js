const mario = document.querySelector('.mario');
const jump = () =>{
    mario.classList.add('jump');
}


/* Pular quando for pressionado qualquer tecla*/
document.addEventListener('keydown',jump);/* Executa a função, nessse caso a função JUMP*/

