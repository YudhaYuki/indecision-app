'use strict';

// var don't give you an error when you reassign and redefine the same variable name
var nameVar = 'Yudha';
nameVar = 'Wijaya';
var nameVar = 'Yuki';
console.log('nameVar', nameVar);

// let will give you an error when you redefine the same variable name, but no problem when reassign
var nameLet = 'Erna';
nameLet = 'Cahyani';
// let nameLet = 'Yuki';
console.log('nameLet', nameLet);

// Const do not let reassign and redefine
var nameConst = 'Rika';
// nameConst = 'Hermawanti';
// const nameConst = 'Yuki';
console.log('nameConst', nameConst);

// Scope, no matter VAR, LET or CONST, it stays exist
function getPetName() {
    var petName = 'Hal';
    return petName;
}

getPetName();
console.log(petName);
