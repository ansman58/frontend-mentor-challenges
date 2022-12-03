import Ready from "./Screens/Ready";
import style from "./App.module.scss";
import Scoreboard from "./Components/Scoreboard";
import React from "react";
import Active from "./Screens/Active";

function App() {
  const [isActive, setIsActive] = React.useState(true);
  return (
    <div className={style.app}>
      <Scoreboard />
      <section className={style.margin}>
        {isActive ? <Active /> : <Ready />}
      </section>
    </div>
  );
}

export default App;
