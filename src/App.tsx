import Todos from './components/Todos';
import Todo from './models/todo';
import NewTodo from './components/NewTodo';
import {useState} from 'react'

function App() {
  const [todoItems, setTodoItems] = useState<Todo[]>([])

  const handleAddTodo = (todoText: string) => {
    const newTodo = new Todo(todoText);
    setTodoItems([...todoItems, newTodo]);
  }

  const handleDeleteTodo = (todoId: number) => {
    setTodoItems(todoItems.filter((todo) => todo.id !== todoId));
  }

  return (
    <>
      <NewTodo onAddTodo={handleAddTodo}/>
      <Todos items={todoItems} onDelete={handleDeleteTodo}/>
    </>
  );
}

export default App;
