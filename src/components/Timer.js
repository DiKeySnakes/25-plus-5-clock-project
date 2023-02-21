const Timer = (props) => {
  const playPause = props.isTimerActive;
  const displayLabel = props.sessionMode ? 'Session' : 'Break';
  const displayClass =
    props.internalCountdown < 61 ? 'time-left warning' : 'time-left';

  return (
    <div id='timer-container'>
      <div id='display-container'>
        <div id='timer-label' className={displayClass}>
          {displayLabel}
        </div>
        <div id='time-left' className={displayClass}>
          <h1>{props.formatDisplay()}</h1>
        </div>
      </div>
      <div className='timer-control-buttons-wrapper'>
        <button
          id='start_stop'
          className='start-stop'
          onClick={props.handleStartStop}>
          {playPause ? (
            <i className='fa-solid fa-pause'></i>
          ) : (
            <i className='fa-solid fa-play'></i>
          )}
        </button>
        <button id='reset' className='reset' onClick={props.handleReset}>
          <i className='fa-solid fa-arrows-rotate'></i>
        </button>
      </div>
    </div>
  );
};

export default Timer;
