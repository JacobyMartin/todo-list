//This component will have a todo list as a prop
//Then we will map it into several todo cards

import type { TodosContainerProps } from "./TodoApp";
import TodoCard from "./TodoCard";

export default function TodosContainer({
  todosList,
  handleTodoCheck,
  handleDeleteTodo,
  handleEditTodo,
}: TodosContainerProps) {
  return (
    <div>
      {todosList.length > 0 || "Todo List is Empty"}
      {todosList.map((todo) => (
        <TodoCard
          key={todo.id}
          {...todo}
          handleTodoCheck={handleTodoCheck}
          handleDeleteTodo={handleDeleteTodo}
          handleEditTodo={handleEditTodo}
        />
      ))}
    </div>
  );
}
