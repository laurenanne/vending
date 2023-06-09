import React from "react";
import vending from "./vend.jpg";

function Home() {
  return (
    <div>
      <p>What are you in the mood for?</p>
      <img src={vending} alt="vending machine" />
    </div>
  );
}

export default Home;
