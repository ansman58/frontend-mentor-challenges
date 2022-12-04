import Ready from "./Screens/Ready";
import style from "./App.module.scss";
import Scoreboard from "./Components/Scoreboard";
import React from "react";
import Active from "./Screens/Active";
import { PlayerChoiceContext } from "./Store/contexts";
import Rules from "./Components/Rules";

function App() {
  const [isActive, setIsActive] = React.useState(false);
  const [choosenOption, setChoosenOption] = React.useState("scissors");
  const [picked, setPicked] = React.useState(null);
  const [score, setScore] = React.useState(0);
  const [showRules, setShowRules] = React.useState(false);

  return (
    <PlayerChoiceContext.Provider
      value={{
        isActive,
        setIsActive,
        choosenOption,
        setChoosenOption,
        picked,
        setPicked,
        score,
        setScore,
      }}
    >
      <div className={style.app}>
        <Scoreboard isActiveBoard={isActive ? true : false} />
        <section className={style.margin}>
          {isActive ? <Active /> : <Ready />}
        </section>
        {showRules && <Rules setShowRules={setShowRules} />}
        <div className={style.footer}>
          <p onClick={() => setShowRules(true)}>RULES</p>
        </div>
      </div>
    </PlayerChoiceContext.Provider>
  );
}

export default App;
