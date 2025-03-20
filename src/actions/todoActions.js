export const add_todo = (todoData) => {
    return { type: "add_todo", payload: { todoData } };
};

export const change_finished = (finished, todo) => {
    return { type: "change_finished", payload: { finished, todo } };
};

export const delete_todo = (todo) => {
    return { type: "delete_todo", payload: { todo } };
};

export const edit_todo = (editText,todo) => {
    return { type: "edit_todo", payload: { todo, todoData: editText } };
};
