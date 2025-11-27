import React, { createContext, useContext } from "react";
import { Toaster } from "react-hot-toast";

const ToastContext = createContext();

export function ToastProvider({ children }) {
  return (
    <ToastContext.Provider value={{}}>
      <Toaster position="bottom-right" />
      {children}
    </ToastContext.Provider>
  );
}

// FIX: rename to match usage across the project
export function useToast() {
  return useContext(ToastContext);
}
