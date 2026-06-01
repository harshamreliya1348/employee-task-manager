import React, { createContext, useEffect, useState } from "react";
import { getLocalStorageData } from "../utils/LocalStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userDatas, setUserDatas] = useState(null);
  useEffect(() => {
    const { employees, admin } = getLocalStorageData();
    setUserDatas({ employees, admin });
  }, []);
  return (
    <div>
      <AuthContext.Provider value={[userDatas, setUserDatas]}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
