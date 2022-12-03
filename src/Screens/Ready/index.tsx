import PentagonBg from "../../assets/bg-pentagon.svg";
import style from "./Ready.module.scss";
import Scissors from "../../assets/icon-scissors.svg";
import LizardIcon from "../../assets/icon-lizard.svg";
import SpockIcon from "../../assets/icon-spock.svg";
import PaperIcon from "../../assets/icon-paper.svg";
import RockIcon from "../../assets/icon-rock.svg";
import Options from "../../Components/Options";
import clsx from "clsx";
import React from "react";
import { PlayerChoiceContext } from "../../Store/contexts";

interface ReadyProps {}

const Ready: React.FC<ReadyProps> = () => {
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
            icon={PaperIcon}
            className={clsx(style.paper, style.option)}
            picked={"paper"}
            playerChoice="paper"
          />
          <Options
            icon={RockIcon}
            className={clsx(style.rock, style.option)}
            picked={"rock"}
            playerChoice="rock"
          />
          <Options
            icon={LizardIcon}
            className={clsx(style.lizard, style.option)}
            picked={"lizard"}
            playerChoice="lizard"
          />
          <Options
            icon={SpockIcon}
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
