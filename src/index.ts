import { Calculator } from './calculator';

const calc = new Calculator();

const result_add = calc.add(2, 3);
console.log(`result_add = ${result_add}`);

const result_multiply = calc.multiply(3, 2);
console.log(`result_multiply = ${result_multiply}`);

const result_divide = calc.divide(12, 2);
console.log(`result_divide = ${result_divide}`);

calc.hello();

console.log('done.')
