import { createContext, useContext, useEffect, useState } from "react";
import { getLocalStorage } from "../utils/localstorage";
const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    return getLocalStorage("lan") || "en";
  });

  useEffect(() => {
    localStorage.setItem("lan", language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
