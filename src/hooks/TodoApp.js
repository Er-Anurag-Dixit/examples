import React from "react";
import TodoList from "./TodoList";
const TodoApp = () => {
  return (
    <div style={{ backgroundColor: "red", height: window.innerHeight }}>
      <div>
        <h1 style={{ justifyContent: "space-around" }}>Todo App</h1>
      </div>
      <div
        style={{
          zIndex: -1,
          height: 400,
          width: 400,
          backgroundColor: "green",
          marginLeft: "500px",
          marginTop: "100px"
          //   padding: "400px 0px 0px 600px"
        }}
      >
        Hello World
        <br /> <br />
        <input
          type="text"
          style={{
            borderRadius: "5px",
            backgroundColor: "grey",
            color: "white"
          }}
        />
        <TodoList />
      </div>
    </div>
  );
};

export default TodoApp;
