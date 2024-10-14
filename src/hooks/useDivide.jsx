import { useContext } from "react";
import { DivideContext } from "../context/DivideContext";

export const useDivide = () => {
  const ctx = useContext(DivideContext);
  return ctx;
};
