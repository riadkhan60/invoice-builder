import { createContext, useState } from "react";

export const Contxet = createContext();

function AuthProvider({ children }) {
  const [isAuth, setIsAuth] = useState(()=>Boolean(sessionStorage.getItem('isAuth')));
  return <Contxet.Provider value={{isAuth, setIsAuth}}>{children}</Contxet.Provider>;
}

export default AuthProvider;
