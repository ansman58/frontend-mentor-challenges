import PentagonBg from "../../assets/bg-pentagon.svg";
import style from "./Ready.module.scss";
import Scissors from "../../assets/icon-scissors.svg";
import Lizard from "../../assets/icon-lizard.svg";
import Spock from "../../assets/icon-spock.svg";
import Paper from "../../assets/icon-paper.svg";
import Rock from "../../assets/icon-rock.svg";
import Options from "../../Components/Options";
import clsx from "clsx";
import React from "react";
import { PlayerChoiceContext } from "../../Store/contexts";

interface ReadyProps {
  setGameOnScreen?: React.Dispatch<React.SetStateAction<boolean>>;
}

const Ready: React.FC<ReadyProps> = ({ setGameOnScreen }) => {
  const { picked } = React.useContext(PlayerChoiceContext);
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style.content}>
          <div className={style["img-container"]}>
            <img
              src={PentagonBg}
              alt="background-image"
              className={style["bg-image"]}
            />
          </div>
          <Options
            icon={Scissors}
            className={clsx(style.scissors, style.option)}
            playerChoice="scissors"
            picked={"scissors"}
          />
          <Options
            icon={Paper}
            className={clsx(style.paper, style.option)}
            picked={"paper"}
            playerChoice="paper"
          />
          <Options
            icon={Rock}
            className={clsx(style.rock, style.option)}
            picked={"rock"}
            playerChoice="rock"
          />
          <Options
            icon={Lizard}
            className={clsx(style.lizard, style.option)}
            picked={"lizard"}
            playerChoice="lizard"
          />
          <Options
            icon={Spock}
            className={clsx(style.spock, style.option)}
            picked={"spock"}
            playerChoice="spock"
          />
        </div>
      </div>
    </div>
  );
};

export default Ready;
