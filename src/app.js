console.log('App.js is running');




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
    name: 'Yudha',
    age: 27
};

function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>;
    }
}

var templateTwo = (
    <div>
        <h1>{user.name}</h1>
        <p>Age: {user.age}</p>
        {getLocation(user.location)} 
    </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);

