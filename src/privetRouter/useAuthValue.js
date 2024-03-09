import { useContext } from "react";
import { Contxet } from "./AuthProvider";

function useAuthValue() {
  const value = useContext(Contxet)
  if(!value) throw new Error("useAuthValue must be used inside AuthProvider")
  return value;
}

export default useAuthValue;