import style from "./Options.module.scss";
import clsx from "clsx";
import React from "react";
import { PlayerChoiceContext } from "../../Store/contexts";

interface IOptions {
  className?: string;
  icon: any;
  isScissors?: boolean;
  isPaper?: boolean;
  isRock?: boolean;
  isSpock?: boolean;
  isLizard?: boolean;
  isActive?: boolean;
  playerChoice?: string;
}

const Options: React.FC<IOptions> = ({
  className,
  icon,
  isScissors,
  isPaper,
  isRock,
  isSpock,
  isLizard,
  isActive,
  playerChoice,
}) => {
  const ref = React.useRef<any>();
  const { isActiveScreen, setIsActiveScreen, choice } =
    React.useContext(PlayerChoiceContext);

  const handlePlayerChoice = () => {
    const choice = isScissors || isPaper || isRock || isSpock || isLizard;

    switch (choice) {
      case isScissors:
        alert(ref?.current?.dataset?.choice);
        break;
      case isPaper:
        alert("paper");
        break;
      case isRock:
        alert("rock");
        break;
      case isSpock:
        alert("spock");
        break;
      case isLizard:
        alert("lizard");
        break;
    }
  };

  return (
    <div className={style.wrapper}>
      <div
        className={clsx(
          style.container,
          {
            [style.rock]: isRock,
            [style.paper]: isPaper,
            [style.scissors]: isScissors,
            [style.spock]: isSpock,
            [style.lizard]: isLizard,
            [style.active]: isActive,
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
