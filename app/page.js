'use client';

import { useState } from 'react';

export default function Page() {
  const [color, setColor] = useState('lightblue');
  const [count, setCount] = useState(0);

  return (
    <div style={{ backgroundColor: color, padding: "20px" }}>
      
      <button onClick={() => {
        setColor("pink");
        setCount(count + 1);
      }}>
        Like: {count}
      </button>

    </div>
  );
}