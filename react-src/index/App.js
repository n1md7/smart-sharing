import React from 'react';

export default class App extends React.Component{
    constructor( props ){
        super(props);
        this.state = {
            text: 'Default react component'
        };
    }

    render() {
        return (
            <div>
                <h1>
                    {this.state.text}
                </h1>
            </div>
        );
    }
}
