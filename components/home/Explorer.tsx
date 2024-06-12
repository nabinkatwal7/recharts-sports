"use client";
import React from "react";
import { motion } from "framer-motion";
import { HoverEffect } from "../ui/CardHoverEffect";

export const projects = [
  {
    title: "Barcelona League Positions 2023",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "/barca2023",
  },
  {
    title: "Barcelona vs Real Madrid League Positions 2023",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "/barcamadrid2023",
  },
];

const Explorer = () => {
  return (
    <div className="p-4 lg:p-10 flex flex-col gap-4">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-center"
      >
        Explore Charts
      </motion.p>
      <div className="max-w-5xl mx-auto px-8">
        <HoverEffect items={projects} />
      </div>
    </div>
  );
};

export default Explorer;
