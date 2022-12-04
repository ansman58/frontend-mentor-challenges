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

    handleResult();
  }, [houseChoice]);

  const handleResult = () => {
    if (!houseChoice) return;

    if (
      (choosenOption === "scissors" && houseChoice === "paper") ||
      (choosenOption === "paper" && houseChoice === "rock") ||
      (choosenOption === "rock" && houseChoice === "lizard") ||
      (choosenOption === "lizard" && houseChoice === "spock") ||
      (choosenOption === "spock" && houseChoice === "scissors") ||
      (choosenOption === "scissors" && houseChoice === "lizard") ||
      (choosenOption === "paper" && houseChoice === "spock") ||
      (choosenOption === "rock" && houseChoice === "scissors") ||
      (choosenOption === "lizard" && houseChoice === "paper") ||
      (choosenOption === "spock" && houseChoice === "rock")
    ) {
      setResult("YOU WON 🥳");
      setScore((prev: number) => prev + 1);
    } else if (choosenOption === houseChoice) {
      setResult("DRAW 😑");
      setScore(score);
    } else {
      setResult("YOU LOST 😥");
      if (!score) return;
      setScore((prev: number) => prev - 1);
    }
  };

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    if (countdown < 1) {
      clearTimeout(timeout);
      setHouseChoiceLoaded(true);
      handleHouseChoice();
    }
  }, [countdown]);

  React.useEffect(() => {
    handleResult();
  }, [houseChoice]);

  return (
    <div className={style.wrapper}>
      <div className={style.content}>
        <div className={style.left}>
          <p className={style.text}>YOU PICKED</p>
          <div className={style.option}>
            <Options
              icon={handlePlayChosenIcon()}
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
          <p className={style.text}>THE HOUSE PICKED</p>
          <div className={style.option}>
            {houseChoiceLoaded ? (
              <Options icon={houseIcon} picked={houseChoice} />
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
