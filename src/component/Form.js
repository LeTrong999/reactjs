import React, { Component } from 'react';
import {connect} from 'react-redux';
import {actCloseForm, actSubmitForm, actUnSelectItem} from './../actions/index';
class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            task_id: '',
            task_name: '',
            task_level: 0
        };
        this.handleChange = this.handleChange.bind(this);
    }

    componentWillMount(){
        this.updateItem(this.props.itemSelected);
    }

    componentWillReceiveProps(nextProps){
        this.updateItem(nextProps.itemSelected);
    }
    updateItem(item){
        if(item !== null){
            this.setState({
                task_id: item.id,
                task_name: item.name,
                task_level: item.level,
            });
        }
    }
    handleCancel = () => {
      this.props.handleCancel();
    }

    ClickSubmit = () => {
        let items = {
           id : this.state.task_id,
           name : this.state.task_name,
           level : this.state.task_level,
        }
        this.props.formSubmit(items)

    }
    handleChange(event){
        const target = event.target;    // input selectbox
        const value  = target.type === 'checkbox' ? target.checked : target.value;
        const name   = target.name;

        this.setState({
            [name]: value
        });

    }
  render() {
    let {isShowForm} = this.props;
    if(isShowForm === false) return null;
    return (
        <div className="row">
          <div className="col-md-offset-7 col-md-5">
            <form method="POST" className="form-inline">
              <div className="form-group">
                <label className="sr-only" htmlFor="true">label</label>
                <input type="text" value={this.state.task_name} onChange={this.handleChange} name="task_name" className="form-control" placeholder="Task Name" ref="task_name" />
              </div>
              <div className="form-group">
                <label className="sr-only" htmlFor="true">label</label>
                <select id="inputDs" value={this.state.task_level} onChange={this.handleChange} className="form-control" name="task_level" required="required" ref="task_level">
                  Small
                  <option value={0}>Small</option>
                  <option value={1}>Medium</option>
                  <option value={2}>High</option>
                </select>
              </div>
              <button type="button" onClick={this.ClickSubmit} className="btn btn-primary">Submit</button>
              <button onClick={this.handleCancel} type="button" className="btn btn-default">Cancel</button>
            </form>
          </div>
        </div>
    )
  }
}

const mapStateToProps = state => {
    return {
        isShowForm: state.isShowForm,
        itemSelected: state.itemSelected
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handleCancel: () => {
            dispatch(actCloseForm()) ;
            dispatch(actUnSelectItem()) ;
        },
        formSubmit: (item) => {
            dispatch(actSubmitForm(item)) ;
            dispatch(actCloseForm()) ;
            dispatch(actUnSelectItem()) ;
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);
