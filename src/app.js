console.log('App.js is running');

// JSX - JavaScript XML


var app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer'
}

var template = (
    <div>
        <h1>{app.title}</h1>
        <p>{app.subtitle}</p>
        <ul>
            <li>Item one</li>
            <li>Item two</li>
        </ul>
    </div> 
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

var templateTwo = (
    <div>
        <h1>{user.name}</h1>
        <p>Age: {user.age}</p>
        <p>Location: {user.location}</p> 
    </div> 
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);

