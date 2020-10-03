import React from "react";
import TinderCard from "react-tinder-card";

export default function App() {
  // ...

  const onSwipe = (direction) => {
    console.log("You swiped: " + direction);
  };

  const onCardLeftScreen = (myIdentifier) => {
    console.log(myIdentifier + " left the screen");
  };

  const socials = [
    { name: "steam", link: "https://steamcommunity.com/id/Hogginss/" },
    { name: "github", link: "https://github.com/NikolajHoggins/" },
  ];

  return (
    <div className="container">
      {socials.map((card) => {
        return (
          <TinderCard
            className="card"
            onSwipe={onSwipe}
            onCardLeftScreen={() => onCardLeftScreen("fooBar")}
            preventSwipe={[]}
          >
            <div className="content">
              <h1>{card.name}</h1>
              <a href={card.link}>go to site</a>
            </div>
          </TinderCard>
        );
      })}
    </div>
  );
}
