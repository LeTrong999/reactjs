import React, { Component } from 'react';
import {connect} from 'react-redux';
import {actDeteleItem,actOpenForm,actSelectedItem} from './../actions/index';

class Item extends Component {
    constructor(props){
        super(props);
        this.state = {
        };
    }
    handleClickdelete = (id) => {
        this.props.handleDelete(id);
    }
    handleClickedit = (item) => {
        this.props.handleopen(item);
    }

    render() {
        const {item} = this.props;
        const {index} = this.props;
        const id = item.id;
        return (
            <tr>
                <td className="text-center">{index}</td>
                <td>{item.name}</td>
                <td className="text-center">{this.showlevel(item.level)}</td>
                <td>
                    <button type="button" className="btn btn-warning" onClick={()=>this.handleClickedit(item)}>Edit</button>
                    <button type="button" className="btn btn-danger" onClick={()=>this.handleClickdelete(id)}>Delete</button>
                </td>
            </tr>
        )
    }

    showlevel(level){
        let elementlevel = <span className="label label-default">Small</span>;
        if(level === 1){
            elementlevel = <span className="label label-info">Midium</span>
        }else if(level === 2){
            elementlevel = <span className="label label-danger">High</span>
        }
        return elementlevel;
    }
}

    const mapStateToProps = state => {

        return {
            isShowForm: state.isShowForm,
        }
    }

    const mapDispatchToProps = (dispatch, ownProps) => {
        return {
            handleDelete: (id) => {
                dispatch(actDeteleItem(id))
            },
            handleopen: (item) => {
                dispatch(actSelectedItem(item));
                dispatch(actOpenForm(item))
            }
        }
    }

export default connect(mapStateToProps, mapDispatchToProps)(Item);
