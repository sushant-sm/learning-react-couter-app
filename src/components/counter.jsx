import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0,
        tags: ['Tag1', 'Tag2', 'Tag3']
        // imageURL: 'https://picsum.photos/200'
    };
    render() { 

        let classes = this.dynamicClass();

        return (
            <div>
                <span className = {classes}>{this.state.count}</span>
                <button className='btn btn-secondary'>Increment</button>
                <ul> {this.state.tags.map( tag => <li key={tag}>{tag}</li>)} </ul>
            </div>
        );
    }

    dynamicClass() {
        let classes = "m-2 btn btn-";
        classes += this.state.count === 0 ? "primary" : "warning";
        return classes;
    }
}
 
export default Counter;