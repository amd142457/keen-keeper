"use client";

import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

const COLORS = ["#7c3aed", "#22c55e", "#065f46"];

export default function InteractionChart({ data }) {
  return (
    <PieChart width={300} height={250}>
      <Pie
        data={data}
        dataKey="value"
        nameKey="name"
        innerRadius={70}
        outerRadius={100}
      >
        {data.map((entry, index) => (
          <Cell key={index} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>

      <Tooltip />
      <Legend />
    </PieChart>
  );
}
