import { useState } from "react";
import "../style/Header.css";
import logo from "../imagens/logo.png";
import angry from "../imagens/angry.jpg";
import boodies from "../imagens/boobies.gif";

export const Header = () => {
  return (
    <main className="header">
      <img src={logo} alt="Logo do site" className="logo" />
    </main>
  );
};

export const Maincontent = () => {
  const [joke, setJoke] = useState("");
  const [imageSrc, setImageSrc] = useState(angry);

  const handleClick = async () => {
    const response = await fetch("https://api.chucknorris.io/jokes/random");
    const data = await response.json();
    setJoke(data.value);
    setImageSrc(boodies);
  };

  return (
    <main className="main">
      <img
        src={imageSrc}
        alt="Imagem atual"
        className={imageSrc === boodies ? "boodies-img" : "angry-img"}
      />
      {joke && <p className="joke">{joke}</p>}
      <button onClick={handleClick} className="button">
        Click para Piada inutil
      </button>
    </main>
  );
};

export const Footer = () => {
  return (
    <footer className="footer">
      <p>Joab Pereira 2025</p>
    </footer>
  );
};
