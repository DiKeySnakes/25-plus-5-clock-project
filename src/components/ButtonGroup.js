import SettingsContext from './SettingsContext';
import { useContext } from 'react';

function ButtonGroup(props) {
  const settingsInfo = useContext(SettingsContext);

  const handleClickUp = () => {
    let value = settingsInfo.breakMinutes;
    const newValue = value++;
    settingsInfo.setBreakMinutes(newValue);
  };

  return (
    <div>
      <div id='break-label'>
        Break Length
        <button id='break-decrement' {...props}>
          <i className='fa-solid fa-arrow-down'></i>
        </button>
        <span id='break-length'>{settingsInfo.breakMinutes}</span>
        <button id='break-increment' onClick={handleClickUp} {...props}>
          <i className='fa-solid fa-arrow-up'></i>
        </button>
      </div>
      <div id='session-label'>
        Session Length
        <button id='session-decrement' {...props}>
          <i className='fa-solid fa-arrow-down'></i>
        </button>
        <span id='session-length'>{settingsInfo.workMinutes}</span>
        <button id='session-increment' {...props}>
          <i className='fa-solid fa-arrow-up'></i>
        </button>
      </div>
    </div>
  );
}

export default ButtonGroup;
