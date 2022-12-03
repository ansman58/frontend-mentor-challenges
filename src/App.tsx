import Ready from "./Screens/Ready";
import style from "./App.module.scss";
import Scoreboard from "./Components/Scoreboard";

function App() {
  return (
    <div className={style.app}>
      <Scoreboard />
      <section className={style.margin}>
        <Ready />
      </section>
    </div>
  );
}

export default App;
