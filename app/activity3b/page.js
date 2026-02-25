"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// 🌙 Theme colors
const themes = {
  light: {
    bg: "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #ff758c 100%)",
    card: "rgba(255,255,255,0.18)",
    text: "#ffffff",
    buttonIdle: "#ffffff",
    buttonText: "#333",
  },
  dark: {
    bg: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
    card: "rgba(0,0,0,0.35)",
    text: "#f1f5f9",
    buttonIdle: "#1e293b",
    buttonText: "#e2e8f0",
  },
};

// 🔥 Reusable button
const navButton = (active, theme) => ({
  margin: "8px",
  padding: "12px 22px",
  cursor: "pointer",
  borderRadius: "999px",
  border: "none",
  fontWeight: "600",
  fontSize: "14px",
  color: active ? "#fff" : theme.buttonText,
  background: active
    ? "linear-gradient(135deg, #ff6f61, #ffb347)"
    : theme.buttonIdle,
  boxShadow: active
    ? "0 6px 18px rgba(255,111,97,0.5)"
    : "0 4px 10px rgba(0,0,0,0.15)",
  transition: "all 0.25s ease",
});

// Activity 1
function Activity1() {
  useEffect(() => {
    console.log("Component Loaded");
  }, []);

  return (
    <h2 className="sectionTitle">
      Activity 1: Check console for "Component Loaded"
    </h2>
  );
}

// Activity 2
function Activity2() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  return (
    <div>
      <h2 className="sectionTitle">Activity 2: Count = {count}</h2>
      <button
        className="primaryBtn"
        onClick={() => setCount((c) => c + 1)}
      >
        Increase Count
      </button>
    </div>
  );
}

// Activity 3
function Activity3() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <div>
        <div className="spinner" />
        <p>Loading users...</p>
      </div>
    );

  return (
    <div>
      <h2 className="sectionTitle">Activity 3: Users List</h2>
      <ul className="userList">
        {users.map((user) => (
          <li key={user.id} className="userItem">
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

// Activity 4
function Activity4() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <h2 className="sectionTitle">
      Activity 4: Timer = {seconds} seconds
    </h2>
  );
}

// 🎯 Main App
export default function App() {
  const [active, setActive] = useState(1);
  const [mode, setMode] = useState("light");

  const theme = themes[mode];

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "40px 20px",
        fontFamily: "'Poppins', sans-serif",
        background: theme.bg,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        transition: "0.4s",
      }}
    >
      {/* Title */}
      <h1
        style={{
          fontSize: "2.5rem",
          fontWeight: 700,
          color: theme.text,
          marginBottom: "10px",
          textAlign: "center",
        }}
      >
        ✨ React useEffect Activities
      </h1>

      {/* Theme Toggle */}
      <button
        onClick={() => setMode(mode === "light" ? "dark" : "light")}
        style={{
          marginBottom: "20px",
          padding: "8px 16px",
          borderRadius: "999px",
          border: "none",
          cursor: "pointer",
          fontWeight: 600,
        }}
      >
        Toggle {mode === "light" ? "🌙 Dark" : "☀️ Light"}
      </button>

      {/* Nav buttons */}
      <div style={{ marginBottom: "25px", textAlign: "center" }}>
        {[1, 2, 3, 4].map((num) => (
          <button
            key={num}
            style={navButton(active === num, theme)}
            onClick={() => setActive(num)}
          >
            Activity {num}
          </button>
        ))}
      </div>

      {/* Glass Card */}
      <motion.div
        layout
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        style={{
          width: "100%",
          maxWidth: "720px",
          padding: "35px",
          borderRadius: "20px",
          background: theme.card,
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          border: "1px solid rgba(255,255,255,0.25)",
          boxShadow: "0 20px 40px rgba(0,0,0,0.25)",
          textAlign: "center",
          color: theme.text,
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.25 }}
          >
            {active === 1 && <Activity1 />}
            {active === 2 && <Activity2 />}
            {active === 3 && <Activity3 />}
            {active === 4 && <Activity4 />}
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Global styles */}
      <style>{`
        .sectionTitle {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 15px;
        }

        .primaryBtn {
          padding: 12px 24px;
          border-radius: 10px;
          border: none;
          background: linear-gradient(135deg, #36d1dc, #5b86e5);
          color: white;
          font-weight: 600;
          cursor: pointer;
          margin-top: 15px;
          transition: 0.25s;
        }

        .primaryBtn:hover {
          transform: translateY(-2px) scale(1.03);
        }

        .userList {
          list-style: none;
          padding: 0;
        }

        .userItem {
          padding: 10px 14px;
          margin: 6px 0;
          border-radius: 10px;
          background: rgba(255,255,255,0.25);
          backdrop-filter: blur(6px);
        }

        .spinner {
          width: 42px;
          height: 42px;
          border: 4px solid rgba(255,255,255,0.3);
          border-top: 4px solid white;
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin: 20px auto;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        @media (max-width: 600px) {
          h1 { font-size: 1.8rem; }
        }
      `}</style>
    </div>
  );
}
