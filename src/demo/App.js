/* eslint no-magic-numbers: 0 */
import React, {Component} from 'react';

import {DashTreebeard} from '../lib';

const data = {
    name: 'root',
    key: '__root__',
    children: [
        {
            key: 'A',
            name: 'A',
            children: [
                {name: '1', key: 'A.1'},
                {name: '2', key: 'A.2'},
            ],
        },
        {
            name: 'B',
            children: [
                {
                    name: 'X',
                    key: 'B.X',
                    children: [
                        {
                            name: '1',
                            key: 'B.X.1',
                        },
                        {name: '2', key: 'B.X.2'},
                    ],
                },
            ],
        },
    ],
};

class App extends Component {
    constructor() {
        super();
        this.state = {
            data,
        };
        this.setProps = this.setProps.bind(this);
    }

    setProps(newProps) {
        this.setState(newProps);
    }

    render() {
        console.log(this.state);
        return (
            <div>
                <DashTreebeard
                    setProps={this.setProps}
                    {...this.state}
                    persistence={true}
                />
            </div>
        );
    }
}

export default App;
