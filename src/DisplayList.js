import React, { Component } from 'react';
import './App.css';

class DisplayList extends Component {
    constructor() {
        super()
        this.state = {
            isChecked: 'false'
        }
    }
    // to allow checkbox to change based to the item 
    updChange = () => {
        if (this.state.isChecked === 'false') {
            this.setState({ isChecked: 'check' })
        } else {
            this.setState({ isChecked: 'false' })
        }
    }
    render() {
        const item = this.props.item
        return <li>
            <input type='checkbox' onChange={this.updChange.bind(this)} />
            <i className={this.state.isChecked} >{item}</i>
            <a href='#' onClick={this.props.delItem.bind(this, item)}><img src='https://cdn1.iconfinder.com/data/icons/basic-ui-elements-color/700/010_trash-2-512.png' /></a>
        </li>
    }


}
export default DisplayList;

