'use strict'

const fibonacci = (maxNum) => {
    const array =[0,1];
    let i = 2;
    let num;
    do {
      let a = array[i - 1];
      let b = array[i - 2];
      num = a + b;
      i++;
      array.push(num);
    }while (num < maxNum);
    return array;
  }

const isFibonnaci = (num) => {
    const array = fibonacci(350);
    return array.indexOf(num) !== -1;
}


module.exports = {
    fibonacci,
    isFibonnaci
}
