// import PlayButton from './PlayButton.js';
// import PauseButton from './PauseButton.js';

const Timer = (props) => {
  // Conditional rendering
  const timerLabel = props.workTime ? 'Work it baby!' : 'Slacking time!';
  const timeClass = props.intClock < 61 ? 'time-left warning' : 'time-left';

  const playPause = props.isTimerRunning;
  const ariaLabel = props.isTimerRunning ? 'Pause timer' : 'Start timer';

  return (
    <>
      <div id='timer-label' className='timer-label'>
        {timerLabel}
      </div>
      <div className='timer-wrapper'>
        <button
          id='start_stop'
          className='start-stop'
          onClick={props.handleStartStop}
          aria-label={ariaLabel}>
          {playPause ? (
            <i className='fa-solid fa-pause'></i>
          ) : (
            <i className='fa-solid fa-play'></i>
          )}
        </button>
        <div id='time-left' className={timeClass}>
          <p>{props.calcDisplayTime()}</p>
          <hr />
        </div>
        <button
          id='reset'
          className='reset'
          onClick={props.handleReset}
          aria-label='Reset timer'>
          <i className='fa-solid fa-arrows-rotate'></i>
        </button>
      </div>
    </>
  );
};

export default Timer;
