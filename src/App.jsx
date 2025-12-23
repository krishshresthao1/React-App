import "./App.css";
import { useEffect, useState } from "react";
import Counter from "./Counter";
function App() {
  const [quotes, setQuotes] = useState([]);
  const [charName, setCharName] = useState("Byakuya");
  const handleSubmit = async () => {
    if (event.key == "Enter") {
      const fetchQuote = async () => {
        try {
          const response = await fetch(
            `https://yurippe.vercel.app/api/quotes?character=${charName}&random=1`
          );
          const result = await response.json();

          setQuotes(result);
        } catch (e) {
          console.log(e);
        }
      };
      fetchQuote();
    }
  };
  console.log(quotes);

  const input = () => {
    const value = event.target.value;
    setCharName(value);
    console.log(value);
  };

  return (
    <>
      <input type="text" onChange={input} onKeyUp={handleSubmit}></input>
      <ul>
        {quotes.map((todoItem) => (
          <>
            <li>{todoItem.show}</li>
            <li>{todoItem.quote}</li>
            <li>{todoItem.character}</li>
          </>
        ))}
      </ul>
    </>
  );
}

export default App;
