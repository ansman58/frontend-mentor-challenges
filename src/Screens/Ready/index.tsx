import PentagonBg from "../../assets/bg-pentagon.svg";
import style from "./Ready.module.scss";
import Scissors from "../../assets/icon-scissors.svg";
import Lizard from "../../assets/icon-lizard.svg";
import Spock from "../../assets/icon-spock.svg";
import Paper from "../../assets/icon-paper.svg";
import Rock from "../../assets/icon-rock.svg";
import Options from "../../Components/Options";
import clsx from "clsx";

const Ready = () => {
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
            isScissors
          />
          <Options
            icon={Paper}
            className={clsx(style.paper, style.option)}
            isPaper
          />
          <Options
            icon={Rock}
            className={clsx(style.rock, style.option)}
            isRock
          />
          <Options
            icon={Lizard}
            className={clsx(style.lizard, style.option)}
            isLizard
          />
          <Options
            icon={Spock}
            className={clsx(style.spock, style.option)}
            isSpock
          />
        </div>
      </div>
    </div>
  );
};

export default Ready;
