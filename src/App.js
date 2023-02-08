import React, { useState } from "react";
import "./App.css";

const App = () => {

  const [initial, setInitial] = useState ([
    {
      id:0, 
      title : '', 
      content :'', 
      isDone : false
    }
  ])

  const [todo, setTodo] = useState([
    {id:1, title:'리액트 공부하기', content: '리액트기초를 공부하자!', isDone :false },
    {id:2, title:'JS 공부하기', content: 'js공부를 해보자!', isDone : true },
  ])

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const addingTitle = (event) => {
    setTitle(event.target.value)
  }

  const addingContent = (event) => {
    setContent(event.target.value)
  }

  const delBtn = (id) => {
    const newTodo = todo.filter(todo => todo.id !== id)
    setTodo(newTodo)

  }

  const addBtn = () => {
    if(title.trim()==='' || content.trim()===''){
        alert("Please fill in the all-blank!")
      return;} 
    const addList = {
      id: todo.length +1,
      title: title,
      content: content
    }
    setTodo([...todo, addList])
  }

  const workingDone = (id) => {
    const addComplete = todo.map((initial) => {
      if(initial.id===id){
        return {
          ...initial,
          isDone : !initial.isDone,
        }
      } else {
        return {...initial}
      }
    })
    setTodo(addComplete)
  }

  return (
        <div className="todopage">
          <div className="header"> 
            <div> 🔴 🟡 🟢 My Todo List </div>
            <div> React ➕ ❏ </div>
          </div>
          <div className="inputform">
            <label> Title </label>
            <input className="inputbox" value = {title} onChange ={addingTitle} />

            <label> Content </label>
            <input className="inputbox" value = {content} onChange ={addingContent} /> 
            <button className="addbtn" onClick={addBtn}> Add </button> 
          </div>  

          <div className='workingcard'> 
            <h2 className="cardlist"> I'm still Working🔥 </h2>
            <div className="workinglist"> {
                todo.map((item) => {
                  if(!item.isDone){
                    return (
                        <div key={item.id}>
                          <div className="todoList">
                            <div className="todo_title">{item.title} </div>
                            <div className="todo_content"> {item.content} </div>                            
                            <div className="allbtn">
                                <button className="editbtn" onClick={()=> workingDone(item.id)}>
                                  {item.isDone? 'Cancle' : 'Complete'}
                                </button>
                                <button className="delbtn" onClick={()=> delBtn(item.id)}> Delete </button>
                            </div>
                          </div>
                        </div> 
                    )} else{
                    return null;
                  }
            })}
            </div>

            <h2 className="cardlist"> It's already Done👏</h2>
            <div className="completelist"> {
              todo.map((item) => {
                if(item.isDone){
                  return (
                      <div key = {item.id}>
                        <div className="todoList">
                          <div className="todo_title">{item.title} </div>
                          <div className="todo_content"> {item.content} </div>
                          <div className="allbtn">
                            <button className="editbtn" onClick={()=> workingDone(item.id)}>
                              {item.isDone? 'Cancle' : 'Complete'}
                            </button>
                            <button className="delbtn" onClick={()=> delBtn(item.id)}> Delete </button>
                          </div>
                        </div>
                      </div> 
                  )} else{
                  return null;
                }
            })} </div>
          </div>
        </div>
  )
}

export default App;