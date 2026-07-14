import React from 'react';
import Todo from '../models/todo';
import TodoItem from './TodoItem';

const Todos: React.FC<{items: Todo[]; onDelete: (id: number) => void}> = (props) => {
    return (
        <div>
            <h1>Todos</h1>
            <ul>
                {props.items.map((item) => (
                    <TodoItem key={item.id} text={item.item} onDelete={() => props.onDelete(item.id)} />
                ))}
            </ul>
        </div>
    )
}

export default Todos;