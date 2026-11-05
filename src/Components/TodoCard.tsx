//This compnent will contain
//1. Body for title of todo message
//2. A button for deleting this todo item
//3. a button to edit this todo item
//4. a check box that will be used to show if todo is completed

import type { TodoCardFunctions } from "./TodoApp";

export default function TodoCard({
  id,
  checked,
  title,
  handleTodoCheck,
  handleDeleteTodo,
  handleEditTodo,
}: TodoCardFunctions) {
  return (
    <div>
      <input
        type="checkbox"
        name="checked"
        id="checked"
        checked={checked}
        onChange={(e) => handleTodoCheck(e, id)}
      ></input>
      <span>{title}</span>
      <button onClick={() => handleDeleteTodo(id)}>Delete</button>
      <button onClick={() => handleEditTodo(id)}>Edit</button>
    </div>
  );
}
