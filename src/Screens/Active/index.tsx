import Options from "../../Components/Options";
import style from "./Active.module.scss";
import ScissorsIcon from "../../assets/icon-scissors.svg";
import LizardIcon from "../../assets/icon-lizard.svg";
import SpockIcon from "../../assets/icon-spock.svg";
import PaperIcon from "../../assets/icon-paper.svg";
import RockIcon from "../../assets/icon-rock.svg";
import React from "react";
import { PlayerChoiceContext } from "../../Store/contexts";

const Active = () => {
  const [houseChoiceLoaded, setHouseChiceLoaded] = React.useState(false);

  const { choosenOption, picked } = React.useContext(PlayerChoiceContext);

  const handleIcon = () => {
    switch (choosenOption) {
      case "scissors":
        return ScissorsIcon;
      case "paper":
        return PaperIcon;
      case "rock":
        return RockIcon;
      case "spock":
        return SpockIcon;
      case "lizard":
        return LizardIcon;
      default:
        ScissorsIcon;
    }
  };

  return (
    <div className={style.wrapper}>
      <div className={style.content}>
        <div className={style.left}>
          <p className={style.text}>You Picked</p>

          <div>
            <Options
              icon={handleIcon()}
              isActiveScreen
              playerChoice={choosenOption}
              picked={picked}
            />
          </div>
        </div>
        <div className={style.right}>
          <p className={style.text}>House Picked</p>
          <div>
            {houseChoiceLoaded ? (
              <Options icon={ScissorsIcon} isActiveScreen />
            ) : (
              <div className={style.empty}></div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Active;
