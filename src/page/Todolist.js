import React, { Component } from 'react';
import Title from './../component/Title';
import Control from './../component/Control';
import Form from './../component/Form';
import List from './../component/List';
class Todolist extends Component {
    constructor(props){
        super(props);
        this.state = {
        };
    }

    render() {
        let itemSelected = this.state.itemSelected;
        return (
            <div className="row">
                <Title />
                <Control/>
                <Form />
                <List />
            </div>
        )
    }
}

export default Todolist;
