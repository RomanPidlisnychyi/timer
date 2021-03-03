export default function getTimeFormat(time, timeType) {
  let value;

  if (timeType === 'hours') {
    value = Math.floor((time % (60 * 60 * 24)) / (60 * 60));
  }
  if (timeType === 'mins') {
    value = Math.floor((time % (60 * 60)) / 60);
  }
  if (timeType === 'secs') {
    value = Math.floor(time % 60);
  }

  return String(value).padStart(2, '0');
}
