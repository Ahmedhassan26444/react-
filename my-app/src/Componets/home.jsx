import React, { useState } from 'react';
import Task from './Task';
const Home = () => {
  const [task, setTask] = useState([]);
  const [title, settitle] = useState("");
  const [discreption, setdiscreption] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    setTask([...task , {
      Title: title,
      Description: discreption
    }]);
  };
  const deleteTask  = (index) => {
    const newTask = task.filter((item, i) => i !== index);
    setTask(newTask);
  }
  return (
    <div className='container'>
      <h1>Daily Goals</h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder='Title'
          value={title}
          onChange={(e) => settitle(e.target.value)}
        />
        <textarea
          placeholder='description'
          value={discreption}
          onChange={(e) => setdiscreption(e.target.value)}
        ></textarea>
        <button type="submit">Add</button>
      </form>
      {task.map((item , index) => {
        return (
          <Task 
          key={index}
          title={item.Title}
           description={item.Description} 
           deleteTask = {deleteTask}
           index={index}
           />
        );
      })}
    </div>
  );
};

export default Home;