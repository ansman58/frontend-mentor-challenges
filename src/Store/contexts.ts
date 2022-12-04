import React from "react";

interface IPlayerChoiceContext {
  isActive: boolean;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
  choosenOption: string;
  setChoosenOption: React.Dispatch<React.SetStateAction<string>>;
  picked: string;
  setPicked: React.Dispatch<React.SetStateAction<string>>;
  score: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
}

const initialState: IPlayerChoiceContext = {
  isActive: false,
  setIsActive: () => {},
  choosenOption: "",
  setChoosenOption: () => {},
  score: 0,
  setScore: () => {},
  picked: "",
  setPicked: () => {},
};

export const PlayerChoiceContext = React.createContext(initialState);
