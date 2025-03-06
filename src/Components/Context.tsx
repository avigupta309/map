import React, { createContext, ReactNode, useState } from "react";

interface ContextType {
  location: string | undefined;
  setLocation: (locat: string) => void;
}

interface providerProps {
  children: ReactNode;
}

export const ContextApi = createContext<ContextType | undefined>(undefined);

export const ContextProvider: React.FC<providerProps> = (props) => {
  const [location, setLocation] = useState<string>();
  return (
    <ContextApi.Provider value={{ location, setLocation }}>
      {props.children}
    </ContextApi.Provider>
  );



};
