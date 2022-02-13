import { Dashboard } from "./componentes/Dashbord";
import { Header } from "./componentes/Header";

import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <>
      <Header />
      <Dashboard />
      <GlobalStyle/>
    </>
  );
}