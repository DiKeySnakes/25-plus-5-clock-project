const SettingsGroup = (props) => {
  return (
    <div id='settings-container'>
      <div id={`${props.idText}-label`} className='settings-label'>
        {props.name}
      </div>
      <div className='settings-wrapper'>
        <button
          id={`${props.idText}-increment`}
          className='settings-btn'
          onClick={() => props.handleIncrement(props.fnInput)}
          aria-label={`Increment ${props.idText} timer`}>
          <i className='fa-solid fa-arrow-up'></i>
        </button>
        <div id={`${props.idText}-length`} className='settings-time'>
          {props.timerLength}
        </div>
        <button
          id={`${props.idText}-decrement`}
          className='settings-btn'
          onClick={() => props.handleDecrement(props.fnInput)}
          aria-label={`Decrement ${props.idText} timer`}>
          <i className='fa-solid fa-arrow-down'></i>
        </button>
      </div>
    </div>
  );
};

export default SettingsGroup;
