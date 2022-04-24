import CheckSystem from './CheckCardSystem';

const input = document.querySelector('.input');
const checkSystem = new CheckSystem(input.value);
checkSystem.init();
