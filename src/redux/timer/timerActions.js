import { createAction } from '@reduxjs/toolkit';

const start = createAction('START_TIMER');
const stop = createAction('STOP_TIMER');
const wait = createAction('WAIT_TIMER');
const reset = createAction('RESET_TIMAR');
const incrementTime = createAction('INCREMENT_TIME');

const timerActions = {
  start,
  stop,
  wait,
  reset,
  incrementTime,
};

export default timerActions;
