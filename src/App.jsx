import { useState } from "react";

function App() {
  const [q, setQ] = useState("");

  const students = [
    { name: "Asha R", roll: "202401" },
    { name: "Vikram S", roll: "202102" },
    { name: "Meera P", roll: "202215" },
    { name: "Rohan K", roll: "202309" },
  ];

  const filtered = students.filter(s =>
    s.name.toLowerCase().includes(q.toLowerCase()) ||
    s.roll.includes(q)
  );

  return (
    <div>
      <input
        placeholder="Search students..."
        value={q}
        onChange={(e) => setQ(e.target.value)}
      />

      {filtered.map((s) => (
        <div key={s.roll}>
          {s.name} — {s.roll}
        </div>
      ))}
    </div>
  );
}

export default App;
