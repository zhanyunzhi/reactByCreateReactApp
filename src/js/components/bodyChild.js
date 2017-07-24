/**
 * Created by ZYZ on 2017/7/24.
 */
import React, { Component } from 'react';

export default class BodyChild extends Component{
    render() {
        return (
            <p>输入的值是<input type='text' onChange={this.props.handleChildChangeValue}/></p>
        )
    }
}