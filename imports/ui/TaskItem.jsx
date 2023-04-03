import { useEffect, useState } from 'react';

// styles
import React from 'react';


// Library imports
import { PencilSquareIcon  } from '@heroicons/react/24/outline';
import { TrashIcon } from '@heroicons/react/24/outline';

const TaskItem = ({ id,title, deleteTask, toggleTask ,isChecked, editItem}) => {
  const [_checked, setChecked ] = useState(isChecked);
  
  

  const handleCheckboxChange = (e) =>{
    setChecked(!_checked);
    toggleTask(id,!_checked);
  }

  const handleEditSubmit = (e)=>{
    e.preventDefault();
    editItem(id,e.target.editTask.value);
    document.querySelector(".editCard").style.display="none"

  }

  return (
    <div className='taskCard'>
      <div>
        <input
          type="checkbox"
          checked={_checked}
          onChange={handleCheckboxChange}
          name={title}
          id={id}
          />
        <input className='taskTitle' type="text" value={title} onChange={(e)=>{
              editItem(id,e.target.value)
            }}/>
      </div>
      <div>


        {/* // delete button */}
        <button style={{color:"red"}}
          onClick={() => deleteTask(id)}
          >
          <TrashIcon width={24} height={24} />
        </button>

      </div>
    </div>
  )
}
export default TaskItem