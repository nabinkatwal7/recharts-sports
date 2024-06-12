"use client";
import { Barca2023Data } from "@/data/Barca2023";
import React from "react";
import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

const Barca2023 = () => {
  return (
    <div className="flex flex-col p-4">
      <p className="text-center text-3xl font-bold">
        FC Barcelona League position 2024
      </p>
      <ResponsiveContainer width={"100%"} height={700}>
        <LineChart data={Barca2023Data}>
          <Line
            type="monotone"
            dataKey="position"
            stroke="#8884d8"
            strokeWidth={2}
          />
          <XAxis dataKey={"name"} />
          <YAxis reversed dataKey={"position"} />
        </LineChart>
      </ResponsiveContainer>
      <div className="flex flex-col gap-2 text-sm">
        <p>Index</p>
        <div className="flex flex-row gap-2 items-center">
          <div className="bg-[#8884d8] w-10 h-4"></div>
          <p>Barcelona</p>
        </div>
      </div>
    </div>
  );
};

export default Barca2023;
