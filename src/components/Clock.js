import React, { useState, useEffect, useRef } from 'react';
import initialState from './initialState';
import Header from './Header';
import Timer from './Timer';
import SessionButtons from './SessionButtons';
import Footer from './Footer';
import alarm from '../media/alarm.mp3';

function Clock() {
  const [state, setState] = useState({ ...initialState });
  const audioRef = useRef();
  const audioElement = audioRef.current;
  const intervalIdRef = useRef(0);

  console.log(state);

  useEffect(() => {
    document.addEventListener('touchstart', unlockAudioForIOS);
    return document.removeEventListener('touchstart', unlockAudioForIOS);
  });

  const handleStartStop = () => {
    if (!state.isTimerRunning) {
      intervalIdRef.current = runTimer();
      setState((prevState) => {
        return {
          ...prevState,
          isTimerRunning: true,
        };
      });
    } else {
      clearInterval(intervalIdRef.current);
      setState((prevState) => {
        return {
          ...prevState,
          isTimerRunning: false,
        };
      });
    }
  };

  const handleReset = () => {
    clearInterval(intervalIdRef.current);
    intervalIdRef.current = 0;
    setState({ ...initialState, audioUnlocked: true });

    audioElement.pause();
    audioElement.currentTime = 0;
  };

  const handleIncrement = (input) => {
    setState((prevState) => {
      const newSessionLength = prevState[input] + 1;
      const newTime = newSessionLength * 60;

      if (prevState[input] < 60 && !state.isTimerRunning) {
        if (prevState.workTime && input === 'workLength') {
          return {
            ...prevState,
            intClock: newTime,
            workLength: newSessionLength,
          };
        } else if (!prevState.workTime && input === 'breakLength') {
          return {
            ...prevState,
            intClock: newTime,
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

      if (prevState[input] > 1 && !state.isTimerRunning) {
        if (prevState.workTime && input === 'workLength') {
          return {
            ...prevState,
            intClock: newTime,
            workLength: newSessionLength,
          };
        } else if (!prevState.workTime && input === 'breakLength') {
          return {
            ...prevState,
            intClock: newTime,
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

  const runTimer = () => {
    return setInterval(() => {
      setState((prevState) => {
        if (prevState.intClock === 0) {
          audioElement.play();
          if (prevState.workTime) {
            return {
              ...prevState,
              intClock: prevState.breakLength * 60,
              workTime: false,
            };
          } else {
            return {
              ...prevState,
              intClock: prevState.workLength * 60,
              workTime: true,
            };
          }
        }

        const newTime = prevState.intClock - 1;

        return {
          ...prevState,
          intClock: newTime,
        };
      });
    }, 1000);
  };

  const calcDisplayTime = () => {
    let newMin = String(Math.floor(state.intClock / 60));
    let newSecs = String(state.intClock % 60);

    if (newMin.length === 1) newMin = '0' + newMin;
    if (newSecs.length === 1) newSecs = '0' + newSecs;

    return newMin + ':' + newSecs;
  };

  const unlockAudioForIOS = () => {
    if (!state.audioUnlocked) {
      audioElement.play();
      audioElement.pause();
      audioElement.currentTime = 0;
    }
  };

  useEffect(() => {
    return () => clearInterval(intervalIdRef.current);
  }, []);

  return (
    <>
      <main className='main-wrapper'>
        <Header />
        <Timer
          handleStartStop={handleStartStop}
          handleReset={handleReset}
          calcDisplayTime={calcDisplayTime}
          workTime={state.workTime}
          intClock={state.intClock}
          isTimerRunning={state.isTimerRunning}
        />
        <SessionButtons
          breakLength={state.breakLength}
          workLength={state.workLength}
          handleIncrement={handleIncrement}
          handleDecrement={handleDecrement}
        />
        <audio id='beep' src={alarm} preload='auto' ref={audioRef} />
      </main>
      <Footer />
    </>
  );
}

export default Clock;
