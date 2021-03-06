import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

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
        let {user} = this.props;
        if(user.isLogin === false) {
            return <Redirect to='/login' />;
        }
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
const mapStateToProps = state => {
    return {
        user: state.user
    }
}
export default connect(mapStateToProps, null)(Todolist);

