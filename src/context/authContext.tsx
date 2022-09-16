import React, { createContext, useContext, useState } from "react";

type Props = {
  children: JSX.Element;
};
declare global {
  interface Window {
    solana: any;
  }
}
interface AppContextInterface {
  auth: {
    phantomInstalled: boolean;
    isConnected: boolean;
  };
}

const AuthContext = createContext<AppContextInterface | null>(null);
export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }: Props) => {
  const [auth, setAuth] = useState({
    phantomInstalled: true,
    isConnected: false,
  });

  const appContext: AppContextInterface = {
    auth,
  };

  return (
    <AuthContext.Provider value={appContext}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
