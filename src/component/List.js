import React, { Component } from 'react';
import Item from './Item';
import {connect} from 'react-redux';
import {actToggleForm} from './../actions/index';
import {filter, includes,orderBy as funcOrderBy } from 'lodash';
class List extends Component {
    constructor(props){
        super(props);
        this.state = {

        }

    }
  render() {
        let {items} = this.props;
        let {orderBy} = this.props.sort;
        let {orderDir} = this.props.sort;
        let itemsOrigin = (items !== null) ? [...items] : [];
        let strSearch = this.props.search;
        // Search
        items = filter(itemsOrigin, (item) => {
            return includes(item.name.toLowerCase(), strSearch.toLowerCase());
        });
        //Sort
        items = funcOrderBy(items, [orderBy], [orderDir]);
        const item = items.map((item,index)=>{
                return (<Item key={index} index={index} item={item} clickControl={this.props.appclickdelete} clickdit={this.props.appclickedit}/>);
            }
        )
        return (
            <div className="panel panel-success">
              <div className="panel-heading">List Task</div>
              <table className="table table-hover ">
                <thead>
                <tr>
                  <th style={{width: '10%'}} className="text-center">#</th>
                  <th>Task</th>
                  <th style={{width: '20%'}} className="text-center">Level</th>
                  <th style={{width: '20%'}}>Action</th>
                </tr>
                </thead>
                <tbody>
                {item}
                </tbody>
              </table>
            </div>
        )
  }
}
const mapStateToProps = state => {
    return {
        items: state.items,
        search: state.search,
        sort: state.sort
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

export default connect(mapStateToProps, mapDispatchToProps)(List);

