import React from "react";
import BoardContext from "./context";
import List from "../List";

import { Container } from "./style";
function Board() {
  return (
    <BoardContext.Provider>
      <Container>
        <h1 className="titleBoard">Poke Info</h1>
        <List />
      </Container>
    </BoardContext.Provider>
  );
}

export default Board;
