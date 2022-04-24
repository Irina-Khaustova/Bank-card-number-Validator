import { checkValid, checkCardSystem } from './utils';
// import { checkCardSystem } from './utils';
import dinersclub from '../img/dinersclub.png';
import maestro from '../img/maestro.png';
import mastercard from '../img/mastercard.png';
import visa from '../img/visa.png';

export default class CheckSystem {
  constructor() {
    this.isValidNumber = '';
    this.paymentSystem = '';
    this.buttonValid = document.querySelector('.button-text');
    this.cardsMenu = [
      { card: 'diners', src: dinersclub },
      { card: 'maestro', src: maestro },
      { card: 'mastercard', src: mastercard },
      { card: 'visa', src: visa },
    ];
    this.button = document.querySelector('.button-text');
    this.input = document.querySelector('.input');
    this.createImage();
  }

  init() {
    this.button.addEventListener('click', this.check.bind(this));
  }

  createImage() {
    this.cardsMenu.forEach((element) => {
      const image = new Image();
      image.src = element.src;
      image.classList.add(`${element.card}`, 'card');
      document.querySelector('.cards-images').appendChild(image);
    });
  }

  check(e) {
    e.preventDefault();
    this.isValidNumber = checkValid(this.input.value);
    this.paymentSystem = checkCardSystem(this.input.value);
    if (this.isValidNumber === 'valid') {
      document.querySelector(`.${this.paymentSystem}`).classList.add('active');
      this.buttonValid.textContent = 'Карта валидна';
    } else {
      this.buttonValid.textContent = 'Номер карты введен неверно';
    }
  }
}
