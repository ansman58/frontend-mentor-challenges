import Ready from "./Screens/Ready";
import style from "./App.module.scss";
import Scoreboard from "./Components/Scoreboard";
import React from "react";
import Active from "./Screens/Active";
import { PlayerChoiceContext } from "./Store/contexts";

function App() {
  const [isActive, setIsActive] = React.useState(false);
  const [choosenOption, setChoosenOption] = React.useState("scissors");
  const [picked, setPicked] = React.useState(null);

  return (
    <PlayerChoiceContext.Provider
      value={{
        isActive,
        setIsActive,
        choosenOption,
        setChoosenOption,
        picked,
        setPicked,
      }}
    >
      <div className={style.app}>
        <Scoreboard isActiveBoard={isActive ? true : false} />
        <section className={style.margin}>
          {isActive ? <Active /> : <Ready setGameOnScreen={setIsActive} />}
        </section>
      </div>
    </PlayerChoiceContext.Provider>
  );
}

export default App;
