import './App.css';
import AddTask from './components/AddTask';
import ListTask from './components/ListTask';

function App() {
  return (
    <>
      <div className="container">
        <AddTask />
        <ListTask />
      </div>
    </>
  );
}

export default App;