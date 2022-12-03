import React from "react";

export const PlayerChoiceContext = React.createContext({
  isActiveScreen: false,
  setIsActiveScreen: () => {},
  choice: "scissors",
});
