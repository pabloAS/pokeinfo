import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import Card from "../Card";

import { Container } from "./style";

function List() {
  useEffect(() => {
    getPokemons();
  }, []);
  const getPokemons = () => {
    var endPoints = [];
    for (var i = 1; i < 19; i++) {
      endPoints.push(`https://pokeapi.co/api/v2/pokemon/${i}`);
    }
    var response = axios
      .all(endPoints.map((endPoint) => axios.get(endPoint)))
      .then((res) => setListItem(res))
      .catch((err) => console.log(err));
    return response;
  };
  const [listItem, setListItem] = useState([]);
  return (
    <Container>
      {listItem.map((item) => (
        <Card
          key={item.id}
          nome={item.data.name}
          avatar={item.data.sprites.front_default}
        />
      ))}
    </Container>
  );
}

export default List;
