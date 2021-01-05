(function main() {
    const content = document.querySelector('#content');
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        timeZone: 'UTC',
    };

    content.innerHTML = new Date().toLocaleString('pt-BR', options);
})();