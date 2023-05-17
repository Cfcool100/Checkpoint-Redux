import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Task from "./Task";
import { filterAll, filterDone, filterUndone} from "../redux/redux";

const ListTask = () => {
  // Utilisation des hooks useSelector et useDispatch pour accéder à l'état et aux actions Redux

  const tasks = useSelector((state) => state.todo.tasks);
  const filter = useSelector((state) => state.todo.filter);
  const dispatch = useDispatch();

  // Filtrage des tâches en fonction de l'état du filtre

  const filteredTasks = tasks.filter((t) => {
    if (filter === "done") {
      return t.isDone === true;
    } else if (filter === "undone") {
      return t.isDone === false;
    } else {
      return true; // Afficher toutes les tâches si aucun filtre n'est appliqué

    }
  });

  // Gestion des actions de filtrage

  const handleFilterDone = () => {
    dispatch(filterDone());
  };

  const handleFilterUndone = () => {
    dispatch(filterUndone());
  };

  const handleFilterAll = () => {
    dispatch(filterAll('all'));
  };
  
  return (
    <>
    <div className="filters">
    <button className='btn btn-all' onClick={handleFilterAll}>All</button>
    <button className='btn btn-done' onClick={handleFilterDone}>Done</button>
    <button className='btn btn-notDone' onClick={handleFilterUndone}>Not Done</button>
      </div>

    <table className='tasks'>
      <tbody>
      {filteredTasks.map((t) => (
  <Task task={t} key={t.id} />
))}
      </tbody>
    </table>
    </>
  );
};

export default ListTask;