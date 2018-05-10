// function square(x) {
//     return x * x;
// };

// console.log(square(3));

// // const squareArrow = (x) => {
// //     return x * x
// // };


// // Another expression syntax
// const squareArrow = (x) => x * x;

// console.log(squareArrow(4));





// CHALLANGE - Use Arrow Function
// getFirstName ('Mike Smith') -> "Mike"
// Create regular arrow function
// Create arrow function using short hand syntax

/* FIRST VERSION
const getFirstName = (fullName) => {
    return fullName.split(' ')[0];
}

console.log(getFirstName('Yudha Yuki'));
*/


// SECOND VERSION
const getFirstName = fullName => fullName.split(' ')[0];

console.log(getFirstName('Yudha Yuki'));

