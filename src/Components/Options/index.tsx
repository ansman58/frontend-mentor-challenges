import style from "./Options.module.scss";
import clsx from "clsx";
import React from "react";
import { PlayerChoiceContext } from "../../Store/contexts";

interface OptionsProps {
  className?: string;
  icon: any;
  playerChoice?: string;
  picked?: string;
}

const Options: React.FC<OptionsProps> = ({
  className,
  icon,
  playerChoice,
  picked,
}) => {
  const ref = React.useRef<any>();
  const { setIsActive, setChoosenOption, setPicked } =
    React.useContext(PlayerChoiceContext);

  const handlePlayerChoice = () => {
    const gameOption = ref.current?.dataset?.choice;

    switch (gameOption) {
      case "scissors":
        setChoosenOption("scissors");
        setPicked("scissors");
        break;
      case "paper":
        setChoosenOption("paper");
        setPicked("paper");
        break;
      case "rock":
        setChoosenOption("rock");
        setPicked("rock");
        break;
      case "spock":
        setChoosenOption("spock");
        setPicked("spock");
        break;
      case "lizard":
        setChoosenOption("lizard");
        setPicked("lizard");
        break;
    }

    setIsActive?.(true);
  };

  return (
    <div className={style.wrapper}>
      <div
        className={clsx(
          style.container,
          {
            [style.rock]: picked === "rock",
            [style.paper]: picked === "paper",
            [style.scissors]: picked === "scissors",
            [style.spock]: picked === "spock",
            [style.lizard]: picked === "lizard",
          },
          className
        )}
        ref={ref}
        data-choice={playerChoice}
        onClick={handlePlayerChoice}
      >
        <img src={icon} alt="" className={clsx(style.img)} />
      </div>
    </div>
  );
};

export default Options;
