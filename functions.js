const returnEmptyString = function () {
    return '';
};

const returnZeroNumber = function () {
    return 0;
};

const returnEmptyArray = function () {
    return [];
};

const returnEmptyObject = function () {
    return {};
};

const returnAbcString = function (value) {
    return 'abc123';
};

const returnSumOfTen = function (arg1, arg2) {
    return arg1 + arg2;
};

const subtraction = function (arg1, arg2) {
    return arg1 - arg2;
};

const multiplication = function (arg1, arg2) {
    return arg1 * arg2;
};

const division = function (arg1, arg2) {
    return arg1 / arg2;
};

const returnArray = function (arg1) {
    return [1, 2, 3];
};

const returnFirstIndex = function (arg1) {
    return arg1[0];
};

const returnSecondIndex = function (arg1) {
    return arg1[1];
};

const returnArrayLength = function (arg1) {
    return arg1.length;
};

//use reduce for this problem
const arraySum = function (arg1) {
    let totalSum = arg1.reduce(function (/*accumulator*/a, /*currentValue*/b) {return a + b});

    return totalSum;
};

// use reduce BUT instead of addition, change sign to subtraction
const arraySubtraction = function (arg1) {
    let totalSubtracted = arg1.reduce(function (/*accumulator*/a, /*currentValue*/b) {return a - b}, 0);
    // unlike addition, you MUST have a second parameter of 0s
    return totalSubtracted;
};

const multiplicationArray = function (arg1) {
    let product = arg1.reduce(function (/*accumulator*/a, /*currentValue*/b) {return a * b});
    // DO NOT use a zero as a second parameter as anything times 0 is 0;
    return product;
};

const divisionArray = function (arg1) {
    const division = arg1.reduce(function (/*accumulator*/a, /*currentValue*/b) {return a / b});
    // DO NOT use a zero as a second parameter as anything times 0 is 0;
    const divisionRounded = division.toFixed(3);
    //when returning convert string result to a number again
    return Number(divisionRounded);
};

const oddArray = function (arg1) {
    let oddNums = [];
    for (let i = 0; i < arg1.length; i++) {
        if (arg1[i] % 2 != 0) {
            oddNums.push(arg1[i]);
        }
    };
    return oddNums;
};

const evenArray = function (arg1) {
    let evenNums = [];
    for (let i = 0; i < arg1.length; i++) {
        if (arg1[i] % 2 === 0) {
            evenNums.push(arg1[i]);
        }
    };
    return evenNums;
};

const returnFruits = function (arg1) {
    let rightFruits = [];
    for (let i = 0; i < arg1.length; i++) {
        if (arg1[i] === 'apple' || arg1[i] === 'orange') {
            rightFruits.push(arg1[i]);
        }
    }
    return rightFruits;
};
