import { useContext, useEffect, useState } from "react";
import ToDoContext from "../../context/ToDoContext";

function AddTodo() {

    const {list,dispatch}=useContext(ToDoContext)
    const [inputValue, setInputValue]=useState('');

    function handleAdd(todoData) {
        if(todoData) {
            dispatch( {type: "add_todo", payload: {todoData:todoData}} );
            setInputValue('');
        }
    }

    useEffect(()=>{
        console.log(list);

    },[list])

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