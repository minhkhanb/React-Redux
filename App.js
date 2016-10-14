import React from 'react';
import Header from './components/Header';
import Content from './components/Content';
import TableRow from './components/TableRow';

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            db: [],
            data: [
                {
                    id: 1,
                    name: 'An',
                    age: 12
                },
                {
                    id: 2,
                    name: 'Anh',
                    age: 13
                },
                {
                    id: 3,
                    name: 'Ban',
                    age: 19
                },
            ],
            header: 'Header from props...',
            content: 'Content from props...'
        }

        this.setStateHandler = this.setStateHandler.bind(this);
    }

    setStateHandler () {
        var item = 'setState...';
        var myArray = this.state.db;
        myArray.push(item);
        this.setState({
            db: myArray
        });
    }

    render() {
        return (
            <div>
                <Header headerProp={this.state.header}/>
                <table>
                    <tbody>
                    {this.state.data.map((person, i) => <TableRow key={i} data={person}/>)}
                    </tbody>
                </table>
                <Content contentProp={this.state.content}/>
                <p>{this.props.headerProp}</p>
                <p>{this.props.contentProp}</p>
                <div className="validatingProps">
                    <h3>Array: {this.props.propArray}</h3>
                    <h3>Bool: {this.props.propBool ? 'True...' : 'False...'}</h3>
                    <h3>Func: {this.props.propFunc(3)}</h3>
                    <h3>Number: {this.props.propNumber}</h3>
                    <h3>String: {this.props.propString}</h3>
                    <h3>Object: {this.props.propObject.objectName1}</h3>
                    <h3>Object: {this.props.propObject.objectName2}</h3>
                    <h3>Object: {this.props.propObject.objectName3}</h3>
                </div>
                <div className="setState">
                    <button onClick={this.setStateHandler}>SET STATE</button>
                    <h4>State Array: {this.state.db}</h4>
                </div>
            </div>
        );
    }
}

App.propTypes = {
    propArray: React.PropTypes.array.isRequired,
    propBool: React.PropTypes.bool.isRequired,
    propFunc: React.PropTypes.func,
    propNumber: React.PropTypes.number,
    propString: React.PropTypes.string,
    propObject: React.PropTypes.object
}

App.defaultProps = {
    headerProp: 'Header from props...',
    contentProp: 'Content from props...',
    propArray: [1,2,3,4,5],
    propBool: true,
    propFunc: function (e) {
        return e;
    },
    propString: 'String value...',

    propObject: {
        objectName1: 'objectValue1',
        objectName2: 'objectValue2',
        objectName3: 'objectValue3'
    }
}

export default App;