import clsx from "clsx";
import style from "./Scoreboard.module.scss";

interface ScoreboardProps {
  isActiveBoard?: boolean;
}

const Scoreboard: React.FC<ScoreboardProps> = ({ isActiveBoard }) => {
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
          <p className={style.value}>12</p>
        </div>
      </div>
    </div>
  );
};

export default Scoreboard;
