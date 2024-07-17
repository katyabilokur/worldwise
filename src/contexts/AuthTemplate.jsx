import { createContext, useContext } from "react";

const NameContext = createContext();

function NameProvider({ children }) {
  return <NameContext.Provider>{children}</NameContext.Provider>;
}

function useName() {
  const context = useContext(NameContext);

  if (context === undefined)
    throw new Error("NameContext was used outside of NameProvider");
}
