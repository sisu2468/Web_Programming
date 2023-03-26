function createBurst(){
    let animContainer = document.querySelector('.animation-container');
    let burst = document.querySelector('.burst');

    burst.style.top = Math.random() * 550 + 'px';
    burst.style.left = Math.random() * 750 + 'px';

    let burstClone = burst.cloneNode(true);
    animContainer.appendChild(burstClone);

    setTimeout(() => {
        burstClone.remove();
    }, 20000);
}
setInterval(createBurst, 2000);