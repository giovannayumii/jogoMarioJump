/* Para quando precionar qualquer tecla fazer o Mario pular*/
const mario = document.querySelector('.mario');/*classe mario*/
const jump = () =>{
    mario.classList.add('jump');
    /*vai executar a função jump e a função jump vai adicionar a class jump no mario*/
    /*setTimeout(funcao,tempo);*/
    setTimeout(()=> {
        mario.classList.remove('jump');
    },500);
    /*remove a classe para poder realizar a animação novamente ou seja
    a primeira parte faz o mario pular, mas depois ele não pula mais;
    por esse motivo colocamos o timeout remove, para assim poder apertar a tecla
    e assim o mario pular mais vezes*/
}
const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    console.log(pipePosition)
},10);
document.addEventListener('keyDown',jump); /* executa função jump*/


