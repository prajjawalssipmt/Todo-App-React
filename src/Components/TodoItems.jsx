import TodoItem from "./TodoItem";

const TodoItems = ({ todoItems, onDeleteClicked }) => {
  return (
    <div className="items-container">
      {todoItems.map((item) => (
        <TodoItem
          todoName={item.name}
          todoDate={item.dueDate}
          key={item.name}
          onDeleteClicked={onDeleteClicked}
        ></TodoItem>
      ))}
    </div>
  );
};
export default TodoItems;
