function SettingsButtonsGroup(props) {
  return (
    <div id='settings-container'>
      <div id={`${props.idText}-label`} className='settings-label'>
        {props.settingsModeName}
      </div>
      <div className='settings-wrapper'>
        <button
          id={`${props.idText}-increment`}
          className='settings-button'
          onClick={() => props.handleIncrement(props.settingsModeInput)}>
          <i className='fa-solid fa-arrow-up'></i>
        </button>
        <div id={`${props.idText}-length`} className='settings-time'>
          {props.timerLength}
        </div>
        <button
          id={`${props.idText}-decrement`}
          className='settings-button'
          onClick={() => props.handleDecrement(props.settingsModeInput)}>
          <i className='fa-solid fa-arrow-down'></i>
        </button>
      </div>
    </div>
  );
}

export default SettingsButtonsGroup;
