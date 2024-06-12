"use client";
import { RMFCB } from "@/data/RMFCB2024";
import { get } from "@/utils/api";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import Image from "next/image";
import React from "react";
import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

const RMBarca2024 = () => {
  const queryClient = useQueryClient();

  const { data } = useQuery({
    queryKey: ["RMFCB"],
    queryFn: () => get("matches"),
  });

  console.log(data);

  return (
    <div className="flex flex-col p-4">
      <div className="flex flex-row justify-between">
        <div className="flex flex-row gap-2 items-center">
          <Image
            src="/logos/fcb.svg"
            alt="Barcelona"
            width={60}
            height={60}
            className="animate-pulse"
          />
          <p className="text-center text-[#8884d8] text-3xl font-bold">
            FC Barcelona
          </p>
        </div>
        <div className="flex flex-row gap-2 items-center">
          <Image
            src="/logos/rma.png"
            alt="Barcelona"
            width={50}
            height={60}
            className="animate-pulse"
          />
          <p className="text-center text-3xl font-bold">Real Madrid CF</p>
        </div>
      </div>
      <ResponsiveContainer width={"100%"} height={700}>
        <LineChart data={RMFCB}>
          <Line
            type="monotone"
            dataKey="rma"
            stroke="#000000"
            strokeWidth={2}
          />
          <Line
            type="monotone"
            dataKey="fcb"
            stroke="#8884d8"
            strokeWidth={2}
          />
          <XAxis dataKey={"name"} />
          <YAxis reversed />
        </LineChart>
      </ResponsiveContainer>
      <div className="flex flex-col gap-2 text-sm">
        <p>Index</p>
        <div className="flex flex-row gap-2 items-center">
          <div className="bg-[#8884d8] w-10 h-4"></div>
          <p>Barcelona</p>
        </div>
        <div className="flex flex-row gap-2 items-center">
          <div className="bg-[#000000] w-10 h-4"></div>
          <p>Real Madrid</p>
        </div>
      </div>
    </div>
  );
};

export default RMBarca2024;
