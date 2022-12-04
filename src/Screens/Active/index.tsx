import Options from "../../Components/Options";
import style from "./Active.module.scss";
import ScissorsIcon from "../../assets/icon-scissors.svg";
import LizardIcon from "../../assets/icon-lizard.svg";
import SpockIcon from "../../assets/icon-spock.svg";
import PaperIcon from "../../assets/icon-paper.svg";
import RockIcon from "../../assets/icon-rock.svg";
import React from "react";
import { PlayerChoiceContext } from "../../Store/contexts";
import clsx from "clsx";

const Active = () => {
  const [houseChoiceLoaded, setHouseChoiceLoaded] = React.useState(false);
  const [houseChoice, setHouseChoice] = React.useState("");
  const [houseIcon, setHouseIcon] = React.useState<any>(null);
  const [countdown, setCountdown] = React.useState(3);
  const [result, setResult] = React.useState("");

  const { choosenOption, picked, setIsActive, setScore, score } =
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

  const handleHouseChoice = React.useCallback(() => {
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
  }, [houseChoice]);

  const handleResult = () => {
    if (choosenOption === houseChoice) {
      setResult("DRAW");
      setScore(score);
      return;
    } else if (choosenOption === "scissors" && houseChoice === "paper") {
      setResult("YOU WIN");
      setScore(score + 1);
    } else if (choosenOption === "paper" && houseChoice === "rock") {
      setResult("YOU WIN");
      setScore(score + 1);
    } else if (choosenOption === "rock" && houseChoice === "lizard") {
      setResult("YOU WIN");
      setScore(score + 1);
    } else if (choosenOption === "lizard" && houseChoice === "spock") {
      setResult("YOU WIN");
      setScore(score + 1);
    } else if (choosenOption === "spock" && houseChoice === "scissors") {
      setResult("YOU WIN");
      setScore(score + 1);
    } else if (choosenOption === "scissors" && houseChoice === "lizard") {
      setResult("YOU WIN");
      setScore(score + 1);
    } else if (choosenOption === "paper" && houseChoice === "spock") {
      setResult("YOU WIN");
      setScore(score + 1);
    } else if (choosenOption === "rock" && houseChoice === "scissors") {
      setResult("YOU WIN");
      setScore(score + 1);
    } else if (choosenOption === "lizard" && houseChoice === "paper") {
      setResult("YOU WIN");
      setScore(score + 1);
    } else if (choosenOption === "spock" && houseChoice === "rock") {
      setResult("YOU WIN");
      setScore(score + 1);
    } else {
      setResult("YOU LOSE");
      setScore(score - 1);
    }
  };

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    if (countdown < 1) {
      clearTimeout(timeout);
      setHouseChoiceLoaded(true);
    }
  }, [countdown]);

  React.useEffect(() => {
    if (houseChoiceLoaded) {
      handleHouseChoice();
      handleResult();
    }
  }, [houseChoiceLoaded]);

  return (
    <div className={style.wrapper}>
      <div className={style.content}>
        <div className={style.left}>
          <p className={style.text}>You Picked</p>
          <div className={style.option}>
            <Options
              icon={handlePlayChosenIcon()}
              isActiveScreen
              playerChoice={choosenOption}
              picked={picked}
            />
          </div>
        </div>
        {result && (
          <div className={clsx(style.middle, style["desktop-middle"])}>
            <div className={style.margin}>
              <p>{result}</p>
              <div className={style.replay} onClick={() => setIsActive(false)}>
                <p>PLAY AGAIN</p>
              </div>
            </div>
          </div>
        )}
        <div className={style.right}>
          <p className={style.text}>House Picked</p>
          <div className={style.option}>
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
      {/* displays only on mobile */}
      {result && (
        <div className={clsx(style.middle, style["mobile-middle"])}>
          <div className={style.margin}>
            <p>{result}</p>
            <div className={style.replay} onClick={() => setIsActive(false)}>
              <p>PLAY AGAIN</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Active;
