import { createSelector } from '@reduxjs/toolkit';
import getTimeFormat from '../../common/getTimeFormat';

const getTime = state => state.time;
const getSetIntervalId = state => state.setIntervalId;
// const getSeconds = state => state.time;
// const getMinutes = state => state;
// const getHours = state => state;

const getCurrentFormatByType = createSelector(
  [getTime, (state, timeType) => timeType],
  (time, timeType) => getTimeFormat(time, timeType)
);

const timerSelectors = {
  getTime,
  getSetIntervalId,
  getCurrentFormatByType,
};

export default timerSelectors;
