import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { faCheck, faTimes, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { editTask, removeTask, toggleTask } from '../redux/redux';

const Task = ({ task }) => {
  const dispatch = useDispatch();
  const [isEdit, setisEdit] = useState(false);
  const [editedDescription, setEditedDescription] = useState(task.description);
  const [inputError, setInputError] = useState(false);

  const check = () => {
    dispatch(toggleTask(task.id));
  };

  const handleDelete = () => {
    dispatch(removeTask(task.id));
  };

  const handleEditTask = () => {
    if (isEdit && editedDescription.trim() !== '') {
      dispatch(editTask({ taskId: task.id, description: editedDescription }));
      setisEdit(false);
      setInputError(false);
    } else if (isEdit && editedDescription.trim() === '') {
      setInputError(true);
    } else {
      setisEdit(true);
    }
  };

  const handleDescriptionChange = (e) => {
    setEditedDescription(e.target.value);
    setInputError(false);
  };

  return (
    <tr className='task' key={task.id}>
      <td>
        <input type="checkbox" checked={task.isDone} name="" id="" onChange={check} />
      </td>
      <td className='txt'>
      {isEdit ? (
          <>
            <input type="text" value={editedDescription} onChange={handleDescriptionChange} className={inputError ? 'error' : ''}
            />
            {inputError && <p className="error-text">Please enter a description</p>}
          </>
        ) : (
          <p>{task.description}</p>
        )}
      </td>
        {isEdit ? (
          <>
            <td>
              <FontAwesomeIcon icon={faCheck} className="fa-pen" onClick={handleEditTask} />
              <FontAwesomeIcon icon={faTimes} className="fa-pen" onClick={() => setisEdit(false)} />
            </td>
          </>
        ) : (
          <td><FontAwesomeIcon icon={faPenToSquare} className="fa-pen" onClick={() => setisEdit(true)} /></td>
        )}
      <td>
        <FontAwesomeIcon icon={faTrash} className="fa-pen" onClick={handleDelete} />
      </td>
    </tr>
  );
};

export default Task;