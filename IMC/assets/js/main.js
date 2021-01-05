const form = document.querySelector('#formulario');
const result = document.querySelector('#resultado');

const invalidMessage = () => {
    result.innerHTML = '<p>Impossível calcular sem os dados necessários</p>';
};

const showIMC = (imc, level) => {
    result.innerHTML = `<p>Seu imc é ${imc.toFixed(2)} (${level})</p>`;
};

const getIMC = (peso, altura) => peso/(altura**2);

const getIMCLevel = (imc) => {
  const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso',
    'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

  if (imc >= 39.9) return nivel[5];
  else if (imc >= 34.9) return nivel[4];
  else if (imc >= 29.9) return nivel[3];
  else if (imc >= 24.9) return nivel[2];
  else if (imc >= 18.5) return nivel[1];
  else if (imc < 18.5) return nivel[0];
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const peso = e.target.querySelector('#peso').value;
    const altura = e.target.querySelector('#altura').value;

    if (!altura || !peso) {
        invalidMessage()
        return;
    };

    const imc = getIMC(Number(peso), Number(altura));
    const level = getIMCLevel(imc);
    showIMC(imc, level);
});