const Timer = (props) => {
  const timerLabel = props.sessionMode ? 'Session' : 'Break';
  const timeClass =
    props.internalCountdown < 61 ? 'time-left warning' : 'time-left';

  const playPause = props.isTimerActive;
  const ariaLabel = props.isTimerActive ? 'Pause timer' : 'Start timer';

  return (
    <div id='timer-container'>
      <div id='display-container'>
        <div id='timer-label' className={timeClass}>
          {timerLabel}
        </div>
        <div id='time-left' className={timeClass}>
          <h1>{props.calcDisplayTime()}</h1>
        </div>
      </div>
      <div className='timer-control-buttons-wrapper'>
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
        <button
          id='reset'
          className='reset'
          onClick={props.handleReset}
          aria-label='Reset timer'>
          <i className='fa-solid fa-arrows-rotate'></i>
        </button>
      </div>
    </div>
  );
};

export default Timer;
