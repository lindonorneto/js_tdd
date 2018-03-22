// import * as R from 'ramda';
import { union, uniq} from 'ramda';
import sum, {sub, mult, div, PI} from './utils';

const arr1 = [1, 1, 1, 2, 2, 3, 3];
const arr2 = [5, 6, 6, 6, 7, 7, 1];
const arr3 = union(arr1, arr2);

const arr4 = uniq(arr1);
console.log(arr4);

console.log(arr3);

console.log(sum(3,2));
console.log(sub(3,2));
console.log(mult(3,2));
console.log(div(4,2));
console.log(PI);
