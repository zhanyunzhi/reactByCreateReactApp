/**
 * Created by Tiny on 2017/8/2.
 */
import React, { Component } from 'react';

export default class Form extends Component{
    constructor(){
        super();
        this.state = {
            isGoing: true,
            numberOfGuests: 2
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    };

    handleInputChange(event){
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
          <form>
              <label>Is going
                  <input name='isGoing' type='checkbox' checked={this.state.isGoing} onChange={this.handleInputChange} />
              </label>
              <br />
              <label>
                  <input name='numberOfGuests' type='number' value={this.state.numberOfGuests} onChange={this.handleInputChange} />
              </label>
          </form>
        );
    }
}