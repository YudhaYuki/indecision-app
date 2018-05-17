class IndecisionApp extends React.Component {
    render() {
        const title = 'Indecision';
        return (
            <div>
                <Header title={title}/>
                <Action />
                <Options />
                <AddOption />
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>Put your life in the hands of a computer</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    render() {
        return (
            <div>
                <button>What should I do ?</button>
            </div>
        );
    }
}

class Options extends React.Component {
    render() {
        return (
            <div>
                Options component here
                <Option />
            </div>
        );
    }
}

// CHALLANGE --> Option component here

class Option extends React.Component {
    render() {
        return (
            <div>
                Option component here
            </div>
        );
    }
}

class AddOption extends React.Component {
    render() {
        return (
            <div>
                Add option component here
            </div>
        );
    }
}


ReactDOM.render(<IndecisionApp />, document.getElementById('app'));