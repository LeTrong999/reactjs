import React, { Component } from 'react';
import {connect} from 'react-redux';
import {actSearch} from './../actions/index';

class Search extends Component {
    constructor(props){
        super(props);
        this.state = {
            strSearch:'',
        };
    }
    handleSearch = (strSearch) => {
        this.props.HandleSearch(strSearch);
    }
    handleChange = (event) => {
        this.setState({strSearch: event.target.value});
    }
    handClear = () => {
        this.setState({strSearch: ''});
        this.props.HandleSearch('');
    }

  render() {
        let strSearch = this.state.strSearch;
    return (
      <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
        <div className="input-group">
          <input type="text" className="form-control" onChange={this.handleChange} value={this.state.strSearch}  placeholder="Search for..." />
          <span className="input-group-btn">
                <button className="btn btn-info" onClick={()=>this.handleSearch(strSearch)} type="button">Search</button>
                <button className="btn btn-warning" onClick={()=>this.handClear()} type="button">Clear</button>
              </span>
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => {
    return {
        items: state.items
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        HandleSearch: (strSearch) => {
            dispatch(actSearch(strSearch)) ;
            //dispatch(actUnSelectItem()) ;
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);

