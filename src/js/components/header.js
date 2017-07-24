/**
 * Created by ZYZ on 2017/7/23.
 */
import React,{ Component } from 'react';
export default class ComponentHeader extends Component{

    componentWillMount(){
        console.log('Header -- componentWillMount');
    }
    componentDidMount(){
        console.log('Header -- componentDidMount');
    }

    render(){
        return (
            <header>
                <h1>这里是头部</h1>
            </header>
        )
    }
}