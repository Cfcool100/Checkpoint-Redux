import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/redux';

const AddTask = () => {

    const dispatch = useDispatch();
    const [type, setType] = useState('');
    const [isError, setIsError] = useState(false);

    const handleChange = (e) => {
        setType(e.target.value);
        setIsError(false);
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      if (type.trim() === '') {
        setIsError(true);

      } else {
        dispatch(addTask(type));
        setType('');
      }
    };
  

  return (
    <>
        <h1>ToDo list</h1>
      <div className='inputs'> 
        <form className='formAdd' >
          <input type="text" value={type || isError ? type : ''} className='AddTask' onChange={handleChange} onSubmit={handleChange} placeholder="Enter task"/>
          <input type="submit" value="+" className='btn-submit' onClick={handleSubmit} />
        </form>
      </div>
    </>
  )
}

export default AddTask;