/**
 * Created by ZYZ on 2017/7/23.
 */
import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import ReactMixin from 'react-mixin';

import MixinLog from './mixins';
import BodyChild from './bodyChild';

const defaultProps = {
    userName: '默认的userName'
}
export default class BodyIndex extends Component{
    constructor(){
        super();        //调用基类的所有初始化方法
        this.state = {  //初始化赋值
            userName: 'Tiny',
            age: 28
        };
    };
    changeUserInfo(){
        this.setState({age: 20});
        //第一种方式
        var eButton = document.getElementById('button');
        ReactDOM.findDOMNode(eButton).style.color = 'blue';
        //第二种方式
        //console.log(this.refs.button);
        this.refs.button.style.color = 'red';

        MixinLog.log(123);
    }
    handleChildChangeValue(event){
        this.setState({age: event.target.value})
    }
    render(){
        /*setTimeout(()=>{
            //更改state
            this.setState({userName: 'Tina',age: 18});
        },3000)*/
        var userName = "Tiny";
        var boolInput = false;
        var html = 'My&nbsp;html';
        return (
            <div>
                {/*注释*/}
                <h2>这里是中间身体部分</h2>
                <p>{userName = userName === "" ? "没有用户" : userName}</p>
                <p><input type='button' value={userName} disabled={boolInput} /></p>
                <p>{html}</p>
                <p dangerouslySetInnerHTML = {{__html : html}}></p>
                <p>{this.state.userName} {this.state.age} {this.props.userId} {this.props.userName}</p>
                <input type='button' id='button'ref='button' value='提交' onClick={this.changeUserInfo.bind(this)} />
                <BodyChild {...this.props} id={4} handleChildChangeValue={this.handleChildChangeValue.bind(this)} />
            </div>
        )
    }
}
BodyIndex.propTypes = {
    userId: PropTypes.number.isRequired
};

BodyIndex.defaultProps = defaultProps;
ReactMixin(BodyIndex.prototype, MixinLog);
