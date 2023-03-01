import React from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import FriendsCard from "./components/FriendsCard";

import friends from "./friends.json";

function App() {
  return (
    <Wrapper>
      <Title>Friends List</Title>
      {friends.map(f => <FriendsCard name={f.name} occupation={f.occupation} location={f.location} image={f.image} />)}
    </Wrapper>
  );
}

export default App;
