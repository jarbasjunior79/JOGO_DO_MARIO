const mario = document.querySelector('.mario');
const cano = document.querySelector('.cano');
const nuvem = document.querySelector('.nuvem');

const pulo = () => {

    mario.classList.add('pulo');

    setTimeout(() => {
        mario.classList.remove('pulo');
    }, 500);
    
}

const loop = setInterval(() => {

    const posicaoCano = cano.offsetLeft;
    const posicaoMario = Number(window.getComputedStyle(mario).bottom.replace('px',''));
    const posicaoNuvem = nuvem.offsetLeft;
    
    if (posicaoCano > 0 && posicaoCano <= 120 && posicaoMario < 105) {

        cano.style.animation = 'none';
        cano.style.left = `${posicaoCano}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${posicaoMario}px`;

        mario.src = './imagens/game_over.png';
        mario.style.width = '85px';
        mario.style.marginLeft = '50px';

        nuvem.style.animation = 'none';
        nuvem.style.left = `${posicaoNuvem}px`;

        clearInterval(loop);

    }

}, 10);

document.addEventListener('keydown', pulo);
