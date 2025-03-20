import {  useEffect, useState } from "react";
import { useSelector } from "react-redux";

function AddTodo( {add_todo} ) {

    const list=useSelector( (state) => state.todo );

    const [inputValue, setInputValue]=useState('');

    function handleAdd(todoData) {
        if(todoData) {
            add_todo(todoData)
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