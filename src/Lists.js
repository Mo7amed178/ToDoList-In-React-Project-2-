import React, { Component } from 'react';
import './App.css';
import DisplayList from './DisplayList'

class Lists extends Component {

    render() {
        return (
            <div>
                <ul>
                    {this.props.items.map((item) => {
                        return <DisplayList
                            delItem={this.props.delItem.bind(this, item)}
                            item={item} />
                    })
                    }

                </ul>
            </div>
        )

    }
}
export default Lists;