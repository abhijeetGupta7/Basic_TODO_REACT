import { useState } from "react";

function Todo({ todo, isFinished, changeFinished, onDelete, onEdit }) {
    
    const [finished, setFinished]  =  useState(isFinished);
    const [isEditing,setIsEditing] = useState(false);
    const [editText,setEditText] = useState(todo)

    return (
        <div>
            <input 
                type="checkbox" 
                checked={finished} 
                onChange={(e) => {
                    setFinished(e.target.checked);
                    changeFinished(e.target.checked);
                }}
            />

            { isEditing ? <input type="text" value={editText}
                onChange={ (e) => setEditText(e.target.value) }
                /> : 
                <span>{todo}</span> 
            }
            
            <button onClick={()=> {
                if (isEditing) {
                    onEdit(editText); 
                }
                setIsEditing(prev => !prev);
            }}> 
                
            {isEditing ? "Save" : "Edit"}
            
            </button>
            
            <button onClick={onDelete}>Delete</button>
        </div>
    );
}

export default Todo;
