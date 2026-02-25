"use client";

import { useState, useEffect } from "react";

/* ================= CHILD COMPONENT ================= */
function RobotDisplay({ role, power }) {
  let bgColor = "";
  let icon = "";

  if (role === "Medic") {
    bgColor = "linear-gradient(135deg, #16a34a, #86efac)";
    icon = "💊";
  } else if (role === "Warrior") {
    bgColor = "linear-gradient(135deg, #b91c1c, #f87171)";
    icon = "⚔️";
  } else if (role === "Artist") {
    bgColor = "linear-gradient(135deg, #7c3aed, #c4b5fd)";
    icon = "🎨";
  }

  const isCritical = power < 20;

  return (
    <div
      style={{
        marginTop: "30px",
        padding: "30px",
        borderRadius: "18px",
        background: bgColor,
        color: "white",
        textAlign: "center",
        boxShadow: "0 15px 35px rgba(0,0,0,0.25)",
      }}
    >
      <h2>🤖 Robot Identity</h2>

      <div style={{ fontSize: "60px", margin: "15px 0" }}>
        {isCritical ? "⚠️" : icon}
      </div>

      <p><b>Role:</b> {role}</p>
      <p><b>Power:</b> {power}%</p>

      {isCritical && (
        <p style={{ fontWeight: "bold" }}>
          🚨 CRITICAL BATTERY
        </p>
      )}
    </div>
  );
}

/* ================= PARENT COMPONENT ================= */
export default function Page() {
  const [role, setRole] = useState("Medic");
  const [power, setPower] = useState(50);
  const [countdown, setCountdown] = useState(null);
  const [destroyed, setDestroyed] = useState(false);

  // 💥 Self-destruct timer
  useEffect(() => {
    if (countdown === null) return;

    if (countdown === 0) {
      setDestroyed(true);
      return;
    }

    const timer = setTimeout(() => {
      setCountdown((c) => c - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [countdown]);

  // 🔋 Power controls
  const charge = () => setPower((p) => Math.min(100, p + 10));
  const drain = () => setPower((p) => Math.max(0, p - 10));

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "40px",
        textAlign: "center",
        fontFamily: "Poppins, sans-serif",
        background: "linear-gradient(135deg, #0ea5e9, #9333ea)",
        color: "white",
      }}
    >
      <h1>🤖 AI Identity Generator</h1>

      {/* Role Buttons */}
      <div style={{ marginTop: "20px" }}>
        <button className="btn" onClick={() => setRole("Medic")}>Medic</button>
        <button className="btn" onClick={() => setRole("Warrior")}>Warrior</button>
        <button className="btn" onClick={() => setRole("Artist")}>Artist</button>
      </div>

      {/* Power Controls */}
      <div style={{ marginTop: "20px" }}>
        <button className="btn" onClick={charge}>⚡ Charge</button>
        <button className="btn" onClick={drain}>🔻 Drain</button>
      </div>

      {/* Self Destruct */}
      <div style={{ marginTop: "20px" }}>
        <button className="btn danger" onClick={() => setCountdown(5)}>
          💣 Self Destruct
        </button>

        {countdown !== null && !destroyed && (
          <p>⏳ Countdown: {countdown}</p>
        )}
      </div>

      {/* Conditional Rendering */}
      {!destroyed ? (
        <RobotDisplay role={role} power={power} />
      ) : (
        <div style={{ fontSize: "80px", marginTop: "40px" }}>💥</div>
      )}

      {/* Styles */}
      <style>{`
        .btn {
          margin: 8px;
          padding: 10px 18px;
          border-radius: 10px;
          border: none;
          cursor: pointer;
          font-weight: 600;
          background: white;
          color: #333;
          transition: 0.2s;
        }

        .btn:hover {
          transform: translateY(-2px);
        }

        .danger {
          background: #ef4444;
          color: white;
        }
      `}</style>
    </div>
  );
}