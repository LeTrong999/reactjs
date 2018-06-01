import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import FormLogin from './../component/FormLogin';

class Todolist extends Component {
    constructor(props){
        super(props);
        this.state = {
        };
    }

    render() {
        let {user} = this.props;
        if(user.isLogin === true) {
            return <Redirect to='/todolist' />;
        }
        return (
            <div className="row">
                <h1 style={{textAlign: 'center'}}>Login</h1>
                <FormLogin />
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

