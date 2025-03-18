import { useContext, useState } from "react";
import ToDoContext from "../../context/ToDoContext";

function AddTodo() {

    const [,setList]=useContext(ToDoContext)
    const [inputValue, setInputValue]=useState('');

    function handleAdd(todoData) {
        if(todoData) {
            setList( (prevList) => {
                return [...prevList , {id: prevList.length+1, todoData:todoData, isFinished:false}]; 
            })
            setInputValue('');
        }
    }

    return (
        <>
            <input type="text"
            placeholder="Enter todo here"
            onChange={ (e)=> setInputValue(e.target.value)  }
            value={inputValue}
            />
            <button onClick={ ()=> handleAdd(inputValue)  }> Add Todo </button>
        </>
    )
}

export default AddTodo;