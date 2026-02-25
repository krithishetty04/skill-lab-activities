'use client';
import { useState } from "react";

export default function Page() {

  // Level 1
  const [name, setName] = useState("");
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(false);
  const [color, setColor] = useState("red");
  const [likes, setLikes] = useState(0);

  // Level 2
  const [text, setText] = useState("");
  const [age, setAge] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [status, setStatus] = useState(false);
  const [counter, setCounter] = useState(0);

  // Level 3
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);
  const [qty, setQty] = useState(0);
  const [dark, setDark] = useState(false);
  const [result, setResult] = useState("");
  const [c1, setC1] = useState(0);
  const [c2, setC2] = useState(0);
  const [c3, setC3] = useState(0);

  const addTask = () => {
    if (task.trim() !== "") {
      setList([...list, task]);
      setTask("");
    }
  };

  const containerStyle = {
    padding: "30px",
    backgroundColor: dark ? "#121212" : "#f4f6f9",
    color: dark ? "#ffffff" : "#222",
    minHeight: "100vh",
    fontFamily: "Arial, sans-serif"
  };

  const cardStyle = {
    backgroundColor: dark ? "#1e1e1e" : "#ffffff",
    padding: "20px",
    borderRadius: "12px",
    marginBottom: "25px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
  };

  const buttonStyle = {
    padding: "8px 15px",
    margin: "5px",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "#4CAF50",
    color: "white",
    cursor: "pointer"
  };

  const inputStyle = {
    padding: "8px",
    margin: "5px 0",
    borderRadius: "6px",
    border: "1px solid #ccc",
    width: "100%"
  };

  return (
    <div style={containerStyle}>

      <h1 style={{ textAlign: "center" }}>React useState Practice 🚀</h1>

      {/* LEVEL 1 */}
      <div style={cardStyle}>
        <h2>🟢 Level 1</h2>

        <input
          style={inputStyle}
          placeholder="Enter name"
          onChange={(e) => setName(e.target.value)}
        />
        <p>Hello, <b>{name}</b></p>

        <button style={buttonStyle} onClick={() => setCount(count + 1)}>
          Click Me
        </button>
        <p>Clicked: {count}</p>

        <button style={buttonStyle} onClick={() => setShow(!show)}>
          Toggle Message
        </button>
        {show && <p>Welcome Participants!</p>}

        <div style={{ backgroundColor: color, padding: "10px", borderRadius: "8px" }}>
          <button
            style={buttonStyle}
            onClick={() => setColor(color === "red" ? "yellow" : "red")}
          >
            Change Background
          </button>
        </div>

        <button style={{ ...buttonStyle, backgroundColor: "crimson" }}
          onClick={() => setLikes(likes + 1)}>
          ❤️ {likes}
        </button>
      </div>

      {/* LEVEL 2 */}
      <div style={cardStyle}>
        <h2>🟡 Level 2</h2>

        <textarea
          style={inputStyle}
          onChange={(e) => setText(e.target.value)}
        />
        <p>Characters: {text.length}</p>

        <input
          style={inputStyle}
          type="number"
          placeholder="Enter age"
          onChange={(e) => setAge(e.target.value)}
        />
        <p>{age && (age >= 18 ? "Adult" : "Minor")}</p>

        <input
          style={inputStyle}
          type={showPass ? "text" : "password"}
          placeholder="Enter password"
        />
        <button style={buttonStyle} onClick={() => setShowPass(!showPass)}>
          {showPass ? "Hide" : "Show"}
        </button>

        <button style={buttonStyle} onClick={() => setStatus(!status)}>
          {status ? "ON" : "OFF"}
        </button>

        <div>
          <button style={buttonStyle} onClick={() => setCounter(counter + 1)}>+</button>
          <button style={buttonStyle} onClick={() => setCounter(counter - 1)}>-</button>
          <button style={buttonStyle} onClick={() => setCounter(0)}>Reset</button>
          <p>{counter}</p>
        </div>
      </div>

      {/* LEVEL 3 */}
      <div style={cardStyle}>
        <h2>🟠 Level 3</h2>

        <input
          style={inputStyle}
          value={task}
          placeholder="Add task"
          onChange={(e) => setTask(e.target.value)}
        />
        <button style={buttonStyle} onClick={addTask}>Add Task</button>

        <ul>
          {list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <h3>Product: Shoes</h3>
        <button style={buttonStyle} onClick={() => setQty(qty + 1)}>Add</button>
        <p>Quantity: {qty}</p>

        <button
          style={{ ...buttonStyle, backgroundColor: "#333" }}
          onClick={() => setDark(!dark)}
        >
          Toggle Theme
        </button>

        <h3>2 + 2 = ?</h3>
        <button style={buttonStyle} onClick={() => setResult("Wrong")}>3</button>
        <button style={buttonStyle} onClick={() => setResult("Correct")}>4</button>
        <p>{result}</p>

        <div>
          <button style={buttonStyle} onClick={() => setC1(c1 + 1)}>Counter1: {c1}</button>
          <button style={buttonStyle} onClick={() => setC2(c2 + 1)}>Counter2: {c2}</button>
          <button style={buttonStyle} onClick={() => setC3(c3 + 1)}>Counter3: {c3}</button>
        </div>
      </div>

    </div>
  );
}