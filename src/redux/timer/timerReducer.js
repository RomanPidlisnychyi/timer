import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import { timerActions } from './';

const time = createReducer(0, {
  [timerActions.incrementTime]: state => (state += 1),
  [timerActions.stop]: () => 0,
  [timerActions.reset]: () => 0,
});

const setIntervalId = createReducer(null, {
  [timerActions.start]: (_, { payload }) => payload,
  [timerActions.stop]: () => null,
  [timerActions.wait]: () => null,
});

export default combineReducers({
  time,
  setIntervalId,
});
