/**
 * Created by ZYZ on 2017/7/24.
 */
import React, { Component } from 'react';

export default class BodyChild extends Component{
    render() {
        return (
            <div>
                <p>输入的值是<input type='text' onChange={this.props.handleChildChangeValue}/></p>
                <p>{this.props.userId} {this.props.userName} {this.props.id}</p>
            </div>
        )
    }
}