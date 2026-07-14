import {useRef} from 'react'
import React from 'react'

const NewTodo: React.FC<{onAddTodo: (text: string) => void}> = (props) => {
    const todoTextInputRef = useRef<HTMLInputElement>(null)


    const handleFormSubmit = (event: React.FormEvent) => {
        event.preventDefault()

        const enteredText = todoTextInputRef.current!.value

        if (enteredText.trim().length === 0) {
            // throw an error or return
            return
        }

        props.onAddTodo(enteredText)
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <label htmlFor="todo-text">Todo Text</label>
            <input type="text" id="todo-text" ref={todoTextInputRef}/>
            <button type="submit" onClick={handleFormSubmit}>Add Todo</button>
        </form>
    )
}

export default NewTodo