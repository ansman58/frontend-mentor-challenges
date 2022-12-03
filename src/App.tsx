import Ready from "./Screens/Ready";
import style from "./App.module.scss";
import Scoreboard from "./Components/Scoreboard";
import React from "react";
import Active from "./Screens/Active";

function App() {
  const [isActive, setIsActive] = React.useState(false);
  return (
    <div className={style.app}>
      <Scoreboard isActiveBoard={isActive ? true : false} />
      <section className={style.margin}>
        {isActive ? <Active /> : <Ready />}
      </section>
    </div>
  );
}

export default App;
