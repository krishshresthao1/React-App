import "./App.css";
import { useState } from "react";
function App() {
  // const [state, setState] = useState(1);

  // const increment = () => {
  //   setState(prevState => prevState + 1);
  //   setState((prevState) => prevState + 1);
  // }

  // const decremnet = () => {
  //   setState(state - 1);
  // };

  // const todos = [
  //   {
  //     id: 1,
  //     value: "Porsche",
  //   },
  //   {
  //     id: 2,
  //     value: "BMW",
  //   },
  //   {
  //     id: 3,
  //     value: "Toyota",
  //   },
  // ];

  const [todoList, setToDoList] = useState([]);
  const [input, setInput] = useState("");

  const type = (event) => {
    const value = event.target.value;
    setInput(value);
  };

  const handleAdd = () => {
    if (input.trim() === "") {
      return;
    }
    setToDoList([...todoList, input]);
    setInput("");
  };
  console.log(todoList);
  return (
    <>
      {/* <ul>
        {todos.map((todoItem) => (
          <li key={todoItem.id}>{todoItem.value}</li>
        ))}
      </ul> */}
      <h1>{input}</h1>
      <input value={input} type="text" onChange={type}></input>
      <button onClick={handleAdd}>Add</button>
      <ol>
        {todoList.map((todoItem) => (
          <li>{todoItem}</li>
        ))}
      </ol>
    </>
  );
}

export default App;
