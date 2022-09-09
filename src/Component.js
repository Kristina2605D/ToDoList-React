import React, { Component } from "react";
import {Link} from "react-router-dom";
import "./App.css";
export default class Componentss extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newItem: "",
      list: []
    }
  }

  updateInput(key, value) {
    //update react state
    this.setState({
      [key]: value
    });
  }
  addItem() {
    //create item with unique id
    const newItem = {
      id: 1 + Math.random(),
      value: this.state.newItem.slice()
    };

    //coppy of curret list of items
    const list = [...this.state.list];

    //add new item to list
    list.push(newItem);
    //update state with new list and  reset newItem input
    this.setState({
      list,
      newItem: ""
    });
  }
  deleteItem(id) {
    //copy curret list of items
    const list = [...this.state.list];

    //filter out item being deleteed
    const updatedList = list.filter(item => item.id !== id);
    this.setState({ list: updatedList })
  }
  render() {
    return (
      <div className="App">
        <div className="container">
          Add an Item...
          <br />
          <input
            type="text"
            placeholder="Type item here..."
            value={this.state.newItem}
            onChange={e => this.updateInput("newItem", e.target.value)}
          />
          <button
            className="add-btn btn-floating"
            onClick={() => this.addItem()}
          >
            Add
          </button>
          <br />
          <ul>
            {this.state.list.map(item => {
              return (
                <li key={item.id}>
                  {item.value}
                  <button
                    className="btn btn-floating"
                    onClick={() => this.deleteItem(item.id)}
                  >
                    X
                  </button>
                </li>
              )
            })}
          </ul>
        </div>
        <Link to = "/ToDoList"><button className = "newPage">Next page</button></Link>
      </div>
    );
  }
}