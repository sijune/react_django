import React, { Component } from 'react';


export default class PostView extends Component {
    render() {
        return (
            <div>
                <h3>{this.props.title}</h3>
                <p>{this.props.content}</p>
            </div>
        )
    }
}