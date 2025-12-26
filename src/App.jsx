import "./App.css";
import { useState } from "react";

function App() {
  const [quotes, setQuotes] = useState([]);
  const [charName, setCharName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!charName.trim()) return;

    try {
      setLoading(true);
      setError("");

      const response = await fetch(
        `https://yurippe.vercel.app/api/quotes?character=${charName}&random=1`
      );

      if (!response.ok) {
        throw new Error("Character not found");
      }

      const result = await response.json();
      setQuotes(result);
    } catch (e) {
      setError(e.message);
      setQuotes([]);
    } finally {
      setLoading(false);
    }
  };

  const handleInput = (event) => {
    setCharName(event.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={charName}
          onChange={handleInput}
          placeholder="Enter character name"
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <ul style={{ listStyle: "none", padding: 0 }}>
        {quotes.map((item, index) => (
          <li key={index}>
            <p>
              <strong>Show:</strong> {item.show}
            </p>
            <p>
              <strong>Quote:</strong> {item.quote}
            </p>
            <p>
              <strong>Character:</strong> {item.character}
            </p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
