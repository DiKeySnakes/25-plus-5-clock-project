const SettingsGroup = (props) => {
  return (
    <div id='settings-container'>
      <div id={`${props.idText}-label`} className='settings-label'>
        {props.name}
      </div>
      <div className='settings-wrapper'>
        <button
          id={`${props.idText}-increment`}
          className='settings-button'
          onClick={() => props.handleIncrement(props.fnInput)}>
          <i className='fa-solid fa-arrow-up'></i>
        </button>
        <div id={`${props.idText}-length`} className='settings-time'>
          {props.timerLength}
        </div>
        <button
          id={`${props.idText}-decrement`}
          className='settings-button'
          onClick={() => props.handleDecrement(props.fnInput)}>
          <i className='fa-solid fa-arrow-down'></i>
        </button>
      </div>
    </div>
  );
};

export default SettingsGroup;
