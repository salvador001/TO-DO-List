import React from 'react';
import TaskItem from './TaskItem';
import { TasksCollection } from '../api/TasksCollection';
import { useState,useEffect } from 'react';
import Header from './header';

  export const App = () => {
    
    const [newTasks,setNewTasks]=useState([])
    const [newWork,setNewWork]=useState("")

    //get data
    getData = function(){
        Meteor.call('getData', (error, result)=>{
          if(result) {
            console.log("successfull ",result);
            setNewTasks(result);
          } 
          else {
            console.log("fail ",error);
          }
        })
      } 

      //first thing to load
      useEffect(getData,[])

      //add data 
    handleSubmit = (e) => {
        e.preventDefault();
        if(!newWork) {
          return alert("Please enter a new task");
        }
        Meteor.call('postData', newWork.trim(), (error, result)=>{
          if(result) {
            console.log("successfull ",result);
            setNewWork("");
            getData();
          } 
          else {
            console.log("fail2 ",error);
          }
        })

      }

      //delete data
        onDelete = (_id) => {
          Meteor.call('deleteData', _id, (error, result)=>{
            if(result) {
              console.log("successful",result);
              getData();
            } 
            else {
              console.log("fail ",error);
            }
          })
        }

        toggleTask = (_id,checked) =>{
          Meteor.call('isCheckedItem', _id,checked,(error, result)=>{
            getData();
            if(result) {
              console.log("successful ",result);
            } 
            else {
              console.log("failed ",error);
            }
          })
        }


        editTask = (_id,_task) =>{
          Meteor.call('editItem', _id,_task,(error, result)=>{
            getData();
            if(result) {
              console.log("successful",result);
            } 
            else {
              console.log("failed ",error);
            }
          })
        }
        
        
        
  
    return (
      <>
      <Header/>
        <div className='card'>

          <div className='taskForm' >
            <form onSubmit={handleSubmit}>
                <input onChange={(e) =>setNewWork(e.target.value)}
                value= {newWork}
                placeholder='Enter a task' />
                  <button type='submit'> ADD</button>
            </form>
          </div>
  
              {
                newTasks.map(({ title, _id,isChecked}, key) => {
                  return(
                      <TaskItem
                        id={_id}
                        title={title}
                        isChecked = {isChecked}
                        deleteTask={onDelete}
                        toggleTask={toggleTask}
                        editItem={editTask}
                        />
                    )
                  })
                }
          </div>   
      </>
    );
  };
  

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     updateTask({...editedTask, name: updatedTaskName})
//   }