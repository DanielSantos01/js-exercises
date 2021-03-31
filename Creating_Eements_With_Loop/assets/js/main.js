(function main() {
    const elements = [
        {tag: 'p', texto: 'Frase 1'},
        {tag: 'div', texto: 'Frase 2'},
        {tag: 'footer', texto: 'Frase 3'},
        {tag: 'section', texto: 'Frase 4'},
    ]
    const contentContainer = document.querySelector('.container');
    for (let i = 0; i < elements.length; i++) {
        const { tag, texto } = elements[i]
        const newElement = document.createElement(tag);
        newElement.innerText = texto;
        contentContainer.appendChild(newElement);
    }
})();