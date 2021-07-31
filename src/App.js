import { useState, useEffect } from 'react';
import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { AddTodoAction, RemoveTodoAction } from './actions/TodoActions';
import './App.css';
import todoService from './services/TodoService'; 


function App() {


  // const getData = () => {
  //   todoService
  //     .getTodo()
  //     .then((data) => {
  //       console.log(data);
       
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  // console.log("Here i call get data");
  // console.log(getData());
  
  // React.useEffect(getData,[]);

  const [todo, setTodo] = useState();
  const dispatch = useDispatch();
  const Todo = useSelector(state => state.Todo);
  const {todos} = Todo;

const handleSubmit = (e) => {
  e.preventDefault();
  // console.log("todo is-app.js");
  // console.log({todo});
  dispatch(AddTodoAction(todo));

 
};


const removeHandler=(t)=>{
  dispatch(RemoveTodoAction(t));
}


  return (
    <div className="App">
      <header className="App-header">
       <h2>Redux Todo List App</h2>
       <form onSubmit={handleSubmit}>
        <input placeholder = "Enter a Todo" 
        style={{
          width: 350,
          padding: 10,
          borderRadius: 20,
          border: 'none',
          fontSize:20,
        }}
        onChange={(e)=> setTodo(e.target.value)}
        />
        <button type="submit" 
        style={{
          padding:12,
          borderRadius:25,
          fontSize:15,
          marginLeft:20
        }}

        
onClick={(e)=>{
  todoService
  .addTodo({todo})     
  .then((data) => {
    console.log(data);
    // props.history.push("/products");
  })
  .catch((err) => {
    console.log(err);
  });


} }
        
        >Go</button>
       </form>
       <ul className="allTodos">
         {
           todos && todos.map((t)=>(
            <li key={t.id} className="singleTodo">
            <span className="todoText">{t.todo}</span>
            <button
            style={{
              borderRadius:25,
              padding:10,
              border: '1px solid white',
              color: 'white',
              backgroundColor: 'red'
            }}

            onClick={()=>removeHandler(t)}
            
            >Delete</button>
          </li>
           ))
         }
        
       </ul>
      </header>
    </div>
  );
}

export default App;
