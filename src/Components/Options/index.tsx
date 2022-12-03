import Lizard from "../../assets/icon-lizard.svg";
import style from "./Options.module.scss";
import clsx from "clsx";

interface IOptions {
  className?: string;
  icon: any;
  isScissors?: boolean;
  isPaper?: boolean;
  isRock?: boolean;
  isSpock?: boolean;
  isLizard?: boolean;
  isActive?: boolean;
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
}) => {
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
      >
        <img src={icon} alt="" className={clsx(style.img)} />
      </div>
    </div>
  );
};

export default Options;
