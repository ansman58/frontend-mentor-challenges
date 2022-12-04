import React from "react";
import RulesIcon from "../../assets/image-rules.svg";
import CloseIcon from "../../assets/icon-close.svg";
import style from "./Rules.module.scss";

interface RulesProps {
  setShowRules: React.Dispatch<React.SetStateAction<boolean>>;
}

const Rules: React.FC<RulesProps> = ({ setShowRules }) => {
  return (
    <div className={style.wrapper}>
      <div className={style.content}>
        <div className={style.flex}>
          <h2>RULES</h2>
          <img
            src={CloseIcon}
            alt="close icon"
            className={style.close}
            onClick={() => setShowRules(false)}
          />
        </div>
        <div className={style["img-container"]}>
          <img src={RulesIcon} alt="rules" />
        </div>
        <div className={style["mobile-close"]}>
          <img
            src={CloseIcon}
            alt="close icon"
            onClick={() => setShowRules(false)}
          />
        </div>
      </div>
    </div>
  );
};

export default Rules;
