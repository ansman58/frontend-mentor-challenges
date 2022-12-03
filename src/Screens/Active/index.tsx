import Options from "../../Components/Options";
import style from "./Active.module.scss";
import Lizard from "../../assets/icon-lizard.svg";
import React from "react";

const Active = () => {
  const [houseChoiceLoaded, setHouseChiceLoaded] = React.useState(false);

  return (
    <div className={style.wrapper}>
      <div className={style.content}>
        <div className={style.left}>
          <p className={style.text}>You Picked</p>

          <div>
            <Options icon={Lizard} isLizard isActive />
          </div>
        </div>
        <div className={style.right}>
          <p className={style.text}>House Picked</p>
          <div>
            {houseChoiceLoaded ? (
              <Options icon={Lizard} isLizard isActive />
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
