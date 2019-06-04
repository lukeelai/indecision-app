const square = function (x) {
    return x * x;
};

// const squareArrow = (x) => {
//     return x * x
// };

const squareArrow = (x) => x * x;

console.log(squareArrow(8));


const fullName = 'Luke Lai';

const getFirstName = function (x) {
    return x.split(' ')[0];
};

const getFirstNameArrow = (x) => x.split(' ')[0];

console.log(getFirstName('Luke Lai'))
console.log(getFirstNameArrow('Luke Lai'))
