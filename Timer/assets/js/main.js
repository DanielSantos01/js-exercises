const getMyElements = () => {
    const clock = document.querySelector('.relogio');
    const begin = document.querySelector('.iniciar');
    const pause = document.querySelector('.pausar');
    const reset = document.querySelector('.zerar');
    return { clock, begin, pause, reset };
};

(function main() {
    const { begin, clock, pause, reset } = getMyElements();
    let myInterval;
    let segundos = 0;

    const beginEvent = () => {
        clock.classList.remove('emphasis');
        clearInterval(myInterval);
        myInterval = setInterval(() => {
            clock.innerHTML = new Date(2000, 1, 1, 0, 0, segundos).toLocaleTimeString();
            segundos += 1;
        }, 1000);
    };

    const pauseEvent = () => {
        clock.classList.add('emphasis');
        clearInterval(myInterval);
    }

    const clearClock = () => {
        pauseEvent();
        clock.innerHTML = '00:00:00';
        segundos = 0;
    };
    
    begin.addEventListener('click', beginEvent);
    pause.addEventListener('click', pauseEvent);
    reset.addEventListener('click', clearClock);
})();
