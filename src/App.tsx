import { useState } from "react";
//import reactLogo from "./assets/react.svg";
//import viteLogo from "/vite.svg";
import "./App.tsx";
import { Header } from "./components/Header/Header.tsx";
import { Maincontent } from "./components/Header/Header.tsx";
import { Footer } from "./components/Header/Header.tsx";

function App() {
  return (
    <>
      <Header />
      <Maincontent />
      <Footer />
    </>
  );
}

export default App;
