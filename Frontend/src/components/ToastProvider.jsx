import React, { createContext, useContext } from "react";
import { Toaster } from "react-hot-toast";

// if needed later
const ToastContext = createContext();

export function ToastProvider({ children }) {
  return (
    <ToastContext.Provider value={{}}>
      {/* react-hot-toast UI engine */}
      <Toaster position="bottom-right" />
      {children}
    </ToastContext.Provider>
  );
}

// optional context hook (NOT used now)
export function useToastContext() {
  return useContext(ToastContext);
}
