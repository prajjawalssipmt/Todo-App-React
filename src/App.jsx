import AddTodo from "./Components/AddTodo";
import AppName from "./Components/AppName";
import TodoItems from "./Components/TodoItems";
import "./App.css";
import { useState } from "react";
import WelcomeMessage from "./Components/WelcomeMessage";

function App() {
  const [todoItem, setTodoItem] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    // type 1
    // const newTodoItems = [
    //   {
    //     name: itemName,
    //     dueDate: itemDueDate,
    //   },
    //   ...todoItem,
    // ];
    // setTodoItem(newTodoItems);
    // type 2
    // setTodoItem((currValue) => {
    //   const newTodoItems = [
    //     ...currValue,
    //     {
    //       name: itemName,
    //       dueDate: itemDueDate,
    //     },
    //   ];
    //   return newTodoItems;
    // });
    // type 3
    setTodoItem((currValue) => [
      {
        name: itemName,
        dueDate: itemDueDate,
      },
      ...currValue,
    ]);
  };

  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItem.filter((item) => item.name !== todoItemName);
    setTodoItem(newTodoItems);
  };

  return (
    <center className="todo-container">
      <AppName></AppName>
      <AddTodo onNewItem={handleNewItem}></AddTodo>
      {todoItem.length === 0 && <WelcomeMessage />}
      <TodoItems
        todoItems={todoItem}
        onDeleteClicked={handleDeleteItem}
      ></TodoItems>
    </center>
  );
}

export default App;
