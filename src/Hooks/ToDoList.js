import React, { useState, UseState } from "react";
import "./ToDoList.css";
function ToDoList(){
    //State hook - "useState"
    const [newItem, setNewItem] = useState("");
    const [items, setItems] = useState([]);

    const [showEdit, setShowEdit] = useState(-1);
    const [updatedText, setUpdatedText] = useState("");

    //Helper Functions
    function addItem() {

        if (!newItem){
            alert("Enter an item.")
            return;
        }
        const item = {
            id: Math.floor(Math.random() * 1000),
            value: newItem
        };
        setItems(oldList => [...oldList, item]);
        setNewItem("");
        
    }
    function deleteItem(id){
const newArray = items.filter(item => item.id !== id);
setItems(newArray)
    }
    return(
        <div className="App">
            {/* 1. Header */}
            <h1>ToDo List App</h1>

            {/* 2. input (input and button) */}
            <input
            type = "text"
            placeholder = "Add an item..."
            value = {newItem}
            onChange = {e =>setNewItem(e.target.value)}
            />


            <button onClick = {() => addItem()}>Add</button>

 {/* 3. List of todos (unordered list) */}
 <ul>
        {items.map((item) => {
          return (
            <div>
              <li key={item.id} onClick={() => setShowEdit(item.id)}>
                {item.value}
                <button
                  className="delete-button"
                  onClick={() => deleteItem(item.id)}
                >
                  ❌
                </button>
              </li>

              {showEdit == item.id ? (
                <div>
                  <input
                    type="text"
                    value={updatedText}
                    onChange={(e) => setUpdatedText(e.target.value)}
                  />
                  <button onClick={() => showEdit(item.id, updatedText)}>
                    Update
                  </button>
                </div>
              ) : null}
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default ToDoList;