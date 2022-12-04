import Ready from "./Screens/Ready";
import style from "./App.module.scss";
import Scoreboard from "./Components/Scoreboard";
import React from "react";
import Active from "./Screens/Active";
import { PlayerChoiceContext } from "./Store/contexts";

function App() {
  const [isActive, setIsActive] = React.useState(true);
  const [choosenOption, setChoosenOption] = React.useState("scissors");
  const [picked, setPicked] = React.useState(null);
  const [score, setScore] = React.useState(0);

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
      </div>
    </PlayerChoiceContext.Provider>
  );
}

export default App;
