import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';

describe ('check List for issues', () => {
    it('renders without crashing', () => {
        let cards = [{
            id : "a",
            title : "this be a card",
            content : "stuff is in here"
        }];
        const div = document.createElement('div');
        ReactDOM.render(<List cards = {cards}/>, div);
        ReactDOM.unmountComponentAtNode(div);
    })
})