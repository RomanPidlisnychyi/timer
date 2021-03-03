import { timerActions } from './';

let click = 0;

const onStart = () => dispatch => {
  const setIntervalId = setInterval(() => {
    dispatch(timerActions.incrementTime());
  }, 1000);

  dispatch(timerActions.start(setIntervalId));
};

const onStop = setIntervalId => dispatch => {
  clearInterval(setIntervalId);

  dispatch(timerActions.stop());
};

const onWait = setIntervalId => dispatch => {
  click += 1;

  setTimeout(() => {
    if (click < 2) {
      click = 0;
    }
  }, 300);

  if (click < 2) {
    return;
  }

  click = 0;

  clearInterval(setIntervalId);

  dispatch(timerActions.wait());
};

const onReset = () => dispatch => {
  dispatch(timerActions.reset());
};

const timerOperations = {
  onStart,
  onStop,
  onReset,
  onWait,
};

export default timerOperations;
