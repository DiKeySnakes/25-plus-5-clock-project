import React, { useState, useEffect, useRef } from 'react';
import initialState from './initialState';
import Timer from './Timer';
import SessionButtons from './SessionButtons';
import beep from '../media/beep.mp3';

function Clock() {
  const [state, setState] = useState({ ...initialState });
  const audioRef = useRef();
  const audioElement = audioRef.current;
  const intervalIdRef = useRef(0);

  console.log(state);

  const handleStartStop = () => {
    if (!state.isTimerActive) {
      intervalIdRef.current = activateTimer();
      setState((prevState) => {
        return {
          ...prevState,
          isTimerActive: true,
        };
      });
    } else {
      clearInterval(intervalIdRef.current);
      setState((prevState) => {
        return {
          ...prevState,
          isTimerActive: false,
        };
      });
    }
  };

  const handleReset = () => {
    clearInterval(intervalIdRef.current);
    intervalIdRef.current = 0;
    setState({ ...initialState });

    audioElement.pause();
    audioElement.currentTime = 0;
  };

  const handleIncrement = (input) => {
    setState((prevState) => {
      const newSessionLength = prevState[input] + 1;
      const newTime = newSessionLength * 60;

      if (prevState[input] < 60 && !state.isTimerActive) {
        if (prevState.sessionMode && input === 'sessionLength') {
          return {
            ...prevState,
            internalCountdown: newTime,
            sessionLength: newSessionLength,
          };
        } else if (!prevState.sessionMode && input === 'breakLength') {
          return {
            ...prevState,
            internalCountdown: newTime,
            breakLength: newSessionLength,
          };
        } else {
          return { ...prevState, [input]: newSessionLength };
        }
      } else {
        return { ...prevState };
      }
    });
  };

  const handleDecrement = (input) => {
    setState((prevState) => {
      const newSessionLength = prevState[input] - 1;
      const newTime = newSessionLength * 60;

      if (prevState[input] > 1 && !state.isTimerActive) {
        if (prevState.sessionMode && input === 'sessionLength') {
          return {
            ...prevState,
            internalCountdown: newTime,
            sessionLength: newSessionLength,
          };
        } else if (!prevState.sessionMode && input === 'breakLength') {
          return {
            ...prevState,
            internalCountdown: newTime,
            breakLength: newSessionLength,
          };
        } else {
          return { ...prevState, [input]: newSessionLength };
        }
      } else {
        return { ...prevState };
      }
    });
  };

  const activateTimer = () => {
    return setInterval(() => {
      setState((prevState) => {
        if (prevState.internalCountdown === 0) {
          audioElement.play();
          if (prevState.sessionMode) {
            return {
              ...prevState,
              internalCountdown: prevState.breakLength * 60,
              sessionMode: false,
            };
          } else {
            return {
              ...prevState,
              internalCountdown: prevState.sessionLength * 60,
              sessionMode: true,
            };
          }
        }

        const newTime = prevState.internalCountdown - 1;

        return {
          ...prevState,
          internalCountdown: newTime,
        };
      });
    }, 1000);
  };

  const formatDisplay = () => {
    let newMin = String(Math.floor(state.internalCountdown / 60));
    let newSec = String(state.internalCountdown % 60);

    if (newMin.length === 1) newMin = '0' + newMin;
    if (newSec.length === 1) newSec = '0' + newSec;

    return newMin + ':' + newSec;
  };

  useEffect(() => {
    return () => clearInterval(intervalIdRef.current);
  }, []);

  return (
    <div className='clock-wrapper'>
      <SessionButtons
        breakLength={state.breakLength}
        sessionLength={state.sessionLength}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
      />
      <Timer
        handleStartStop={handleStartStop}
        handleReset={handleReset}
        formatDisplay={formatDisplay}
        sessionMode={state.sessionMode}
        internalCountdown={state.internalCountdown}
        isTimerActive={state.isTimerActive}
      />
      <audio id='beep' src={beep} preload='auto' ref={audioRef} />
    </div>
  );
}

export default Clock;
