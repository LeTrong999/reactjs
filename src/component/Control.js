import React, { Component } from 'react';
import Search from './Search';
import Sort from './Sort';
import ToggleButton from './ToggleButton';

class Control extends Component {
    constructor(props){
        super(props);
        this.handleAdd = this.handleAdd.bind(this);
    }
    handleAdd(){
        this.props.onclickAdd();
    }
  render() {

    return (
    <div className="row">
        {/* SEARCH : START */}
        <Search Controlclick={this.props.ControlClick}/>
        {/* SEARCH : END */}
        {/* SORT : START */}
        <Sort onlickControlSort={this.props.AppClickSort}
              orderBy={this.props.orderBy}
              orderDir={this.props.orderDir}
        />
        {/* SORT : END */}
        {/* ADD : START */}
        <ToggleButton />
        {/* ADD : END */}
    </div>
    )
  }
}

export default Control;
