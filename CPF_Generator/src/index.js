import CPFGenerator from './modules/CPFGenerator';
import './assets/css/styles.css';

(function() {
  const Generator = new CPFGenerator();
  const button = document.querySelector('.btn-generate');
  const cpfContent = document.querySelector('.cpf-content');

  const handleCpfGeneration = () => {
    const newCpf = Generator.generateCPF();
    cpfContent.innerHTML = newCpf;
  };

  button.addEventListener('click', handleCpfGeneration);
})()
