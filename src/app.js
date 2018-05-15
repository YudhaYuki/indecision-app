console.log('App.js is running');

const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: []
}

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';

        // 3. CH1
        render();
    }
}

const onRemoveAll = () => {
    app.options = [];
    render();
}

const appRoot = document.getElementById('app');


// 1. CH1
const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options' : 'No option'}</p>
            <p>{app.options.length}</p>
            <button onClick={onRemoveAll}>Remove All</button>

            {
                [<p>a</p>, <p>b</p>, <p>c</p>]
            }

            <ol>
                <li>Item one</li>
                <li>Item two</li>
            </ol>
            
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
        </div> 
    );

    ReactDOM.render(template, appRoot);
}

// 2. CH1
render();



/* CHALLANGE 1
    1. Create render function that render the new jsx
    2. Call it right away
    3. Call it after option array added to
*/

/* CHALLANGE 2
    1. Create "Remove All" button above list
    2. onClick --> wipe the array --> rerender
*/
