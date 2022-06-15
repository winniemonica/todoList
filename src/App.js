import './App.css';
import TodoList from './components/TodoList';
import { TodosProvider } from './useTodos';

function App() {
  return (
    <div className="App">
      <TodosProvider>
        <TodoList />
      </TodosProvider>
    </div>
  );
}

export default App;
