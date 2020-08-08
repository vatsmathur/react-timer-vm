import React, { Component } from "react";
import { render } from "react-dom";
import { useTimer } from "use-timer";

// Styles
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

// Shared components
import RunningButton from "./components/RunningButton";

const BasicTimer = () => {
  const { time, start, pause, reset, isRunning } = useTimer();

  return (
    <div className="card">
      <h5 className="card-header">Basic timer</h5>
      <div className="card-body">
        {isRunning ? (
          <RunningButton />
        ) : (
          <button className="btn btn-primary" onClick={start}>
            Start
          </button>
        )}
        <button className="btn btn-primary" onClick={pause}>
          Pause
        </button>
        <button className="btn btn-primary" onClick={reset}>
          Reset
        </button>
      </div>
      <div className="card-footer">
        Elapsed time: <strong>{time}</strong>
      </div>
    </div>
  );
};

const DecrementalTimer = () => {
  const { time, start, pause, reset, isRunning } = useTimer({
    initialTime: 100,
    timerType: "DECREMENTAL"
  });

  return (
    <div className="card">
      <h5 className="card-header">Decremental timer</h5>
      <div className="card-body">
        {isRunning ? (
          <RunningButton />
        ) : (
          <button className="btn btn-primary" onClick={start}>
            Start
          </button>
        )}
        <button className="btn btn-primary" onClick={pause}>
          Pause
        </button>
        <button className="btn btn-primary" onClick={reset}>
          Reset
        </button>
      </div>
      <div className="card-footer">
        Remaining time: <strong>{time}</strong>
      </div>
    </div>
  );
};

const TimerWithEndTime = () => {
  const endTime = 5;
  const { time, start, pause, reset, isRunning } = useTimer({
    endTime,
    onTimeOver: () => {
      console.log('Time is over');
    }
  });

  return (
    <div className="card">
      <h5 className="card-header">Timer with end time</h5>
      <div className="card-body">
        {isRunning ? (
          <RunningButton />
        ) : (
          <button className="btn btn-primary" onClick={start}>
            Start
          </button>
        )}
        <button className="btn btn-primary" onClick={pause}>
          Pause
        </button>
        <button className="btn btn-primary" onClick={reset}>
          Reset
        </button>
      </div>
      <div className="card-footer">
        {time === endTime ? (
          <span>Finished!</span>
        ) : (
          <span>
            Ellapsed time: <strong>{time}</strong>
          </span>
        )}
      </div>
    </div>
  );
};

const App = () => (
  <React.Fragment>
    <div className="jumbotron">
      <h1 className="display-4">use-timer demo</h1>
      <p className="lead">Simple timer turned into React Hooks.</p>
      <p>
        <a
          href="https://github.com/vatsmathur/react-timer-vm"
          target="blank"
          title="Link to GitHub project"
        >
          https://github.com/thibaultboursier/use-timer
        </a>
      </p>
    </div>
    <div className="container">
      <BasicTimer />
      <DecrementalTimer />
      <TimerWithEndTime />
    </div>
  </React.Fragment>
);

render(<App />, document.getElementById("root"));
