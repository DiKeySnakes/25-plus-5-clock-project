import SettingsButtonsGroup from './SettingsButtonsGroup';
import tomato from '../media/tomato.png';

const SettingsButtons = (props) => {
  return (
    <div id='main-settings-container'>
      <SettingsButtonsGroup
        handleIncrement={props.handleIncrement}
        handleDecrement={props.handleDecrement}
        idText='break'
        settingsModeInput='breakLength'
        timerLength={props.breakLength}
        settingsModeName='Break Length'
      />
      <img src={tomato} alt='tomato' className='tomato' />
      <SettingsButtonsGroup
        handleIncrement={props.handleIncrement}
        handleDecrement={props.handleDecrement}
        idText='session'
        settingsModeInput='sessionLength'
        timerLength={props.sessionLength}
        settingsModeName='Session Length'
      />
    </div>
  );
};

export default SettingsButtons;
