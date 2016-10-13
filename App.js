import React from 'react';
import Header from 'components/Header';
import Content from 'components/Content';

class App extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <Content/>
                <p data-myattribute="Attribute">This is the content 333!sdfsdfds!!</p>
            </div>
        );
    }
}

export default App;

