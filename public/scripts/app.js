'use strict';

console.log('App.js is running');

// JSX - JavaScript XML


var app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer'
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    React.createElement(
        'p',
        null,
        app.subtitle
    ),
    React.createElement(
        'ul',
        null,
        React.createElement(
            'li',
            null,
            'Item one'
        ),
        React.createElement(
            'li',
            null,
            'Item two'
        )
    )
);

var user = {
    name: 'Rene',
    age: 66,
    location: 'Ternat'
};

/*
var userName = 'Yudha';
var userAge = 27;
var userLocation = 'Brussels';
*/

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name
    ),
    React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    React.createElement(
        'p',
        null,
        'Location: ',
        user.location
    )
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
