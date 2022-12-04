import clsx from "clsx";
import React from "react";
import { PlayerChoiceContext } from "../../Store/contexts";
import style from "./Scoreboard.module.scss";

interface ScoreboardProps {
  isActiveBoard?: boolean;
}

const Scoreboard: React.FC<ScoreboardProps> = ({ isActiveBoard }) => {
  const { score } = React.useContext(PlayerChoiceContext);
  return (
    <div
      className={clsx(style.wrapper, {
        [style["active-board"]]: isActiveBoard,
      })}
    >
      <div className={style["options-container"]}>
        <div className={style["options-content"]}>
          <p>Rock</p>
          <p>Paper</p>
          <p>Scissors</p>
          <p>Lizard</p>
          <p>Spock</p>
        </div>
      </div>
      <div className={style.score}>
        <div className={style.flexed}>
          <p className={style.score}>SCORE</p>
          <p className={style.value}>{score}</p>
        </div>
      </div>
    </div>
  );
};

export default Scoreboard;
