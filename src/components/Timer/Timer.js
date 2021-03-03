import { useSelector } from 'react-redux';
import { timerSelectors } from '../../redux/timer';
import styles from './Timer.module.css';

const timeType = {
  HOURS: 'hours',
  MINS: 'mins',
  SECS: 'secs',
};

export default function Timer() {
  const hours = useSelector(state =>
    timerSelectors.getCurrentFormatByType(state, timeType.HOURS)
  );

  const mins = useSelector(state =>
    timerSelectors.getCurrentFormatByType(state, timeType.MINS)
  );

  const secs = useSelector(state =>
    timerSelectors.getCurrentFormatByType(state, timeType.SECS)
  );
  return (
    <span className={styles.span}>
      {hours}:{mins}:{secs}
    </span>
  );
}
