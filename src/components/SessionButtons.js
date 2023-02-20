import SettingsGroup from './SettingsGroup';

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
