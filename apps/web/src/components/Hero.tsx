import { useTheme } from "next-themes";
import React from "react";
import { Scene } from "./three/Box";

export const Hero = () => {
  return (
    <section className="flex flex-row">
      <div className="basis-2/3">
        <h1>
          Emil Fjellström is a Software Developer at Zopa working remote from
          the United Kingdom. Previously he worked as a Software Developer at
          Billhop.
        </h1>
      </div>
      <div className="basis-1/3 h-96">
        <Scene />
      </div>
    </section>
  );
};
