function cycleVar(countNumber) {
    let firstNumber = 1;
    let secondNumber = 1;
    let findNumber;
    if (countNumber > 2) {
        for (var i = 3; i <= countNumber; i++) {
            findNumber = secondNumber + firstNumber;
            firstNumber = secondNumber;
            secondNumber = findNumber;
        }
        return findNumber;
    }else if (countNumber <= 0) {
        return ("Такого числа немає!");
    }else {
        return secondNumber;
    }
}

function cycleArr(countNumber) {
    let number = [1, 1];
    
    if (countNumber <= 0) {
        return ("Такого числа немає!")
    }else if(countNumber > 2) {
        countNumber = countNumber - 1;
        for (var i = 2; i <= countNumber; i++) {
            number.push(number[i - 1] + number[i - 2]);
        }
        return number.pop();
    }else {
        return number[0];
    }
}

function recursion(countNumber){
    let number ;
     
   if(countNumber>2){
    return recursion(countNumber - 1) + recursion(countNumber - 2);
     }else if (countNumber <= 0) {
        return ("Такого числа немає!")
    }else {
     return 1;
 } 
}


let countNumber = parseInt(prompt("Введіть ключ вашого числа :"));
let mark = parseInt(prompt('Виберіть метод виконання поставленої задачі: 1)Цикл і змінна; 2)Цикл і масив; 3)Рекурсія.'));

    switch (mark) {
        case 1:
            document.write(cycleVar(countNumber));
            break;
        case 2:
            document.write(cycleArr(countNumber));
            break;
        case 3:
            document.write(recursion(countNumber));
            break;

        default:
            document.write('Ви вибрали неіснуючий метод!');
    }
