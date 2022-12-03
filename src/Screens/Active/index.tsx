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
  const [houseChoiceLoaded, setHouseChoiceLoaded] = React.useState(false);
  const [houseChoice, setHouseChoice] = React.useState("");
  const [houseIcon, setHouseIcon] = React.useState<any>(null);
  const [countdown, setCountdown] = React.useState(4);

  const { choosenOption, setChoosenOption, picked } =
    React.useContext(PlayerChoiceContext);

  const handlePlayChosenIcon = () => {
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

  const handleHouseChoice = () => {
    const icons = ["scissors", "paper", "rock", "spock", "lizard"];
    const randomChoice = Math.floor(Math.random() * icons.length);
    switch (icons[randomChoice]) {
      case "scissors":
        setHouseChoice("scissors");
        setHouseIcon(ScissorsIcon);
        break;
      case "paper":
        setHouseChoice("paper");
        setHouseIcon(PaperIcon);
        break;
      case "rock":
        setHouseChoice("rock");
        setHouseIcon(RockIcon);
        break;
      case "spock":
        setHouseChoice("spock");
        setHouseIcon(SpockIcon);
        break;
      case "lizard":
        setHouseChoice("lizard");
        setHouseIcon(LizardIcon);
        break;
      default:
        ScissorsIcon;
    }
  };

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    if (countdown === 0) {
      handleHouseChoice();
      setHouseChoiceLoaded(true);
      clearTimeout(timeout);
    }
  }, [countdown]);

  return (
    <div className={style.wrapper}>
      <div className={style.content}>
        <div className={style.left}>
          <p className={style.text}>You Picked</p>

          <div>
            <Options
              icon={handlePlayChosenIcon()}
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
              <Options icon={houseIcon} isActiveScreen picked={houseChoice} />
            ) : (
              <div className={style.empty}>
                <p className={style.countdown}>{countdown}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Active;
