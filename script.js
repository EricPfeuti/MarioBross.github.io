const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const gameOver = document.querySelector('.game-over');
const btn = document.querySelector('.btn');
const button = document.querySelector('.game-start');
const board = document.querySelector('.game-board');

btn.addEventListener("click", () => {
    location.reload();
})

button.addEventListener("click", () => {
    board.style.visibility = 'visible';
    button.style.visibility = 'hidden';
    pipe.style.animation = 'pipe-animation 1.5s infinite linear';
    const jump = () => {
        mario.classList.add('jump');
        setTimeout(() => {
            mario.classList.remove('jump');
        }, 500);
    }
    
    const loop = setInterval(() => {
    
        const pipePosition = pipe.offsetLeft;
        const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
        
        
        if(pipePosition <= 120 && pipePosition > 0 && marioPosition < 100) {
    
            pipe.style.animation = 'none';
            pipe.style.left = `${pipePosition}px`;
    
            mario.style.animation = 'none';
            mario.style.bottom = `${marioPosition}px`;
    
            mario.src = './images/game-over.png';
            mario.style.width = '75px';
            mario.style.marginLeft = '50px';
    
            clearInterval(loop);
    
            gameOver.style.visibility = 'visible';
    
        }

    },10);

    
    
    document.addEventListener('keydown', (e) => {
        if ((e.code === "Space")) {
          jump();
        }
      });
      
})




