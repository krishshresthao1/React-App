function TodoList() {
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
}

return (
  <>
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

export default TodoList();
