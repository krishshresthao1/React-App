import React from "react";

function Array() {
  const [state, setState] = useState(1);

  const increment = () => {
    setState((prevState) => prevState + 1);
    setState((prevState) => prevState + 1);
  };

  const decremnet = () => {
    setState(state - 1);
  };

  const todos = [
    {
      id: 1,
      value: "Porsche",
    },
    {
      id: 2,
      value: "BMW",
    },
    {
      id: 3,
      value: "Toyota",
    },
  ];
  return (
    <>
      <ul>
        {todos.map((todoItem) => (
          <li key={todoItem.id}>{todoItem.value}</li>
        ))}
      </ul>
    </>
  );
}

export default Array;
