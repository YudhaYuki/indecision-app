import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));


// -------- CLASS OLD SYNTAX

class OldSyntax {
    constructor() {
        this.name = 'Mike';
    }
}

const oldSyntax = new OldSyntax();
console.log(oldSyntax);



// -------- CLASS OLD SYNTAX

class NewSyntax {
    name = 'Jane';
}

const newSyntax = new NewSyntax();
console.log(newSyntax);
