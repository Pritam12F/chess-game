import { BrowserRouter } from "react-router-dom";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return <BrowserRouter>{children}</BrowserRouter>;
};
