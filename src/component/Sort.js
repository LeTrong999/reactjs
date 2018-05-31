import React, { Component } from 'react';
import {connect} from 'react-redux';
import {actSort} from './../actions/index';

class Sort extends Component {
    constructor(props){
        super(props);
        this.state = {

        };
    }

    handleSort = (orderBy,orderDir) => {
      this.props.HandleSort(orderBy,orderDir);
    }
  render() {
      let orderBy = this.props.sort.orderBy;
      let orderDir = this.props.sort.orderDir;
    return (
        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
          <div className="dropdown">
            <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
              Sort by <span className="caret" />
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
              <li><a role="button" onClick={()=> this.handleSort('name','asc')} >Name ASC</a></li>
              <li><a role="button" onClick={()=>this.handleSort('name','desc')}>Name DESC</a></li>
              <li role="separator" className="divider" />
              <li><a role="button" onClick={()=>this.handleSort('level','asc')}>Level ASC</a></li>
              <li><a role="button" onClick={()=>this.handleSort('level','desc')}>Level DESC</a></li>
            </ul>
            <span className="label label-success label-medium">{orderBy + " - " + orderDir}</span>
          </div>
        </div>
    )
  }
}

const mapStateToProps = state => {
    return {
        sort: state.sort,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        HandleSort: (orderBy,orderDir) => {
            dispatch(actSort(orderBy,orderDir)) ;
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sort);
