import React from "react";
import { FiInfo } from "react-icons/fi";
import { Container } from "./styles";

function Card({ nome, avatar }) {
  return (
    <Container>
      <div className="title">
        <h1>{nome}</h1>
        <header>
          <FiInfo size={20} />
        </header>
      </div>
      <main className="content">
        <abbr title={nome}>
          <img src={avatar} alt="pokemon" />
        </abbr>
      </main>
    </Container>
  );
}

export default Card;
