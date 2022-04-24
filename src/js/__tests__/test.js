import { checkValid, checkCardSystem } from '../utils';

test.each([
  ['4929036063387728', 'valid'],
  ['6011654159996862789', 'valid'],
  ['30236829710221', 'valid'],
  ['3533997838076927479', 'valid'],
  ['6759640014773057', 'invalid'],
  ['6759640014773056', 'invalid'],
])(
  ('should validate checkValid'),
  (input, expected) => {
    expect(checkValid(input)).toBe(expected);
  },
);

test.each([
  ['5290364202705305', 'mastercard'],
  ['4532000430260462', 'visa'],
  ['30158653556951', 'diners'],
  ['5893680866206764', 'maestro'],
])(
  ('should validate checkCardSystem'),
  (input, expected) => {
    expect(checkCardSystem(input)).toBe(expected);
  },
);
