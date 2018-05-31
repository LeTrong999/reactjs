import React, { Component } from 'react';
import {connect} from 'react-redux';
import {actToggleForm} from './../actions/index';

class ToggleButton extends Component {
    constructor(props){
        super(props);
        this.state = {
        };
    }
    handleAdd = () => {
        this.props.handleToggle();
    }

  render() {
        const {isShowForm} = this.props;
        let btnName = (isShowForm === true) ? "CLOSE FORM" : "OPEN FORM";
        let btnClass = (isShowForm === true) ? "btn-success" : "btn-infor";
    return (
        <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
            <button onClick={this.handleAdd} type="button" className={`btn ${btnClass} btn-block`}>{btnName}</button>
        </div>

    )
  }
}
const mapStateToProps = state => {
    return {
        isShowForm: state.isShowForm
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handleToggle: () => {
            dispatch(actToggleForm()) ;
            //dispatch(actUnSelectItem()) ;
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ToggleButton);

