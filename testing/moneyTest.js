import { formatCurrency } from "../utils/money.js";

console.log('convert cents into dollars');
if (formatCurrency(2095) === '20.95') {
  console.log('passed');
} else {
  console.log('failed');
}


if (formatCurrency(0) === '0.00') {
  console.log('passed');

} else {
  console.log('failed');
}
if (formatCurrency(2000.5) === '20.01') {
  console.log('passed');
}
else {
  console.log('failed');
}
