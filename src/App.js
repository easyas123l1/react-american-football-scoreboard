//TODO: STEP 1 - Import the useState hook.
import React, {useState} from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  let [homeCount, setHCount] = useState(0);
  let [awayCount, setACount] = useState(0);
  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Good</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{homeCount}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Bad</h2>
            <div className="away__score">{awayCount}</div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick={() => setHCount(homeCount + 6)}>Good Touchdown</button>
          <button className="homeButtons__touchdown" onClick={() => setHCount(homeCount + 1)}>Good PAT</button>
          <button className="homeButtons__touchdown" onClick={() => setHCount(homeCount + 2)}>Good 2 point conversion</button>
          <button className="homeButtons__touchdown" onClick={() => setHCount(homeCount + 3)}>Good Field Goal</button>
          <button className="homeButtons__touchdown" onClick={() => setHCount(homeCount + 2)}>Good Safety</button>
        </div>
        <div>
        <button className="homeButtons__touchdown" onClick={() => {setHCount(0); setACount(0);}}>Reset Scores</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={() => setACount(awayCount + 6)}>Bad Touchdown</button>
          <button className="awayButtons__touchdown" onClick={() => setACount(awayCount + 1)}>Bad PAT</button>
          <button className="awayButtons__touchdown" onClick={() => setACount(awayCount + 2)}>Bad 2 point conversion</button>
          <button className="awayButtons__touchdown" onClick={() => setACount(awayCount + 3)}>Bad Field Goal</button>
          <button className="awayButtons__touchdown" onClick={() => setACount(awayCount + 2)}>Bad Safety</button>
        </div>
      </section>
    </div>
  );
}

export default App;
