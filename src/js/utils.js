function checkValid(value) {
  if (value === '') {
    /* eslint-disable no-alert */
    alert('введите номер карты');
  }
  const numCard = Number(value.slice(-1));
  const check = value.slice(0, -1).split('').reverse().map((item, index) => {
    if (index % 2 === 0) {
      return (+item * 2) > 9 ? (+item * 2) - 9 : (+item * 2);
    }
    return +item;
  })
    .reduce((sum, current) => sum + current);
  const ost = check % 10;
  return ((10 - ost) === numCard) ? 'valid' : 'invalid';
}

function checkCardSystem(value) {
  let card = '';
  const cards = [
    { cardName: 'visa', numberBeginning: [4] },
    { cardName: 'mastercard', numberBeginning: [51, 52, 53, 54, 55, 222100, 272099] },
    { cardName: 'maestro', numberBeginning: [5018, 5020, 5038, 5893, 6304, 6759, 6761, 6762, 6763] },
    { cardName: 'mir', numberBeginning: [2] },
    { cardName: 'diners', numberBeginning: [300, 301, 302, 303, 304, 305] },
  ];
  cards.forEach((item) => {
    item.numberBeginning.forEach((i) => {
      if (value.startsWith(i)) {
        card = item.cardName;
      }
    });
  });
  return card;
}

export { checkValid, checkCardSystem };
