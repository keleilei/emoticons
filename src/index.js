import React from 'react';
import ReactDOM from 'react-dom';

import {Input, Button} from 'antd';

class TodoApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {items: [], text: ''};
    }

    render() {
        return React.createElement(
            'div',
            null,
            React.createElement(
                'h3',
                null,
                'TODO'
            ),
            React.createElement(TodoList, {items: this.state.items}),
            React.createElement(
                'form',
                {onSubmit: this.handleSubmit},
                React.createElement(Input, {
                    onChange: this.handleChange,
                    value: this.state.text,
                    placeholder: "Input size is small"
                }),
                React.createElement(
                    Button,
                    null,
                    'Add #' + (this.state.items.length + 1)
                )
            )
        );
    }

    handleChange(e) {
        this.setState({text: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        var newItem = {
            text: this.state.text,
            id: Date.now()
        };
        this.setState(prevState => ({
            items: prevState.items.concat(newItem),
            text: ''
        }));
    }
}

class TodoList extends React.Component {
    render() {
        return React.createElement(
            'ul',
            null,
            this.props.items.map(item => React.createElement(
                'li',
                {key: item.id},
                item.text
            ))
        );
    }
}

ReactDOM.render(React.createElement(TodoApp, null), document.getElementById("root"));