'use client';


import { store } from "./store";
import { Provider as ReduxProvider } from "react-redux";

interface ProviderProps {
  children : React.ReactNode
}


const Provider: React.FC<ProviderProps> = ({ children }) => {
  return (
    <ReduxProvider store={store}>{children}</ReduxProvider>
  )
};


export default Provider