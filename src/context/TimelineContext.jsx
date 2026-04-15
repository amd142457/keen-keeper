"use client";

import { createContext, useContext, useState } from "react";

const TimelineContext = createContext();

export const TimelineProvider = ({ children }) => {
  const [timeline, setTimeline] = useState([]);

  const addToTimeline = (item) => {
    setTimeline((prev) => [...prev, item]);
  };

  return (
    <TimelineContext.Provider value={{ timeline, addToTimeline }}>
      {children}
    </TimelineContext.Provider>
  );
};

export const useTimeline = () => useContext(TimelineContext);
