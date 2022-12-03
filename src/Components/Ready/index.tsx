// import { ReactComponent as PentagonBg } from '../../assets/bg-pentagon.svg'
import style from "./Ready.module.scss";
import { ReactComponent as Scissors } from "../../assets/icon-scissors.svg";

const Ready = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <Scissors />
      </div>
    </div>
  );
};

export default Ready;
