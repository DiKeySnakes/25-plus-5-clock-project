import SettingsGroup from './SettingsGroup';
import tomato from '../media/tomato.png';

const SessionButtons = (props) => {
  return (
    <div id='main-settings-container'>
      <SettingsGroup
        handleIncrement={props.handleIncrement}
        handleDecrement={props.handleDecrement}
        idText='break'
        fnInput='breakLength'
        timerLength={props.breakLength}
        name='Break Length'
      />
      <img src={tomato} alt='tomato' className='tomato' />
      <SettingsGroup
        handleIncrement={props.handleIncrement}
        handleDecrement={props.handleDecrement}
        idText='session'
        fnInput='workLength'
        timerLength={props.workLength}
        name='Session Length'
      />
    </div>
  );
};

export default SessionButtons;
