import './App.css';
import Header from "./Mycomponents/Header";
import { Todos } from "./Mycomponents/Todos";
import { Footer } from "./Mycomponents/Footer";
import { AddTodo } from "./Mycomponents/AddTodo";
import { About } from "./Mycomponents/About";

import React, { useState } from 'react';

import {
  BrowserRouter as Router,
  // Switch,
  Route,
  Routes
} from "react-router-dom";
// import Switch from 'react-router-transition-switch';


export default function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) => {
    console.log("I am ondelete of todo", todo);
    // Deleting this way in react does not work
    // let index=todos.indexOf(todo);
    // todos.splice(index,1);

    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
    // to add or delete added items and to convert also in string form
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const addTodo = (title, desc) => {
    console.log("I am adding This todo", title, desc);
    let sno;
    if (todos.length === 0) {
      sno = 0;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);

  }

  const [todos, setTodos] = useState(initTodo);
  //by using useEffect
  // useEffect(() => {
  //   localStorage.setItem("todos", JSON.stringify(todos));
  // }, [todos])

  

  return (
    <>
      <Router>
        <Header title="My Todos List" searchBar={true} />
          
          <AddTodo addTodo={addTodo} />
          <Todos todos={todos} onDelete={onDelete} />
             
          <Routes>
          <Route exact path="/about" element={<About />} />
          </Routes>

        <Footer />
      </Router>
    </>
  );
}

