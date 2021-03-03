import { useSelector, useDispatch } from 'react-redux';
import { timerSelectors, timerOperations } from '../../redux/timer';

export default function ButtonControl() {
  const dispatch = useDispatch();

  const time = useSelector(timerSelectors.getTime);
  const setIntervalId = useSelector(timerSelectors.getSetIntervalId);
  const hendlerBtn = e => {
    const { name } = e.target;

    if (name === 'onStop' || name === 'onWait') {
      dispatch(timerOperations[name](setIntervalId));
      return;
    }

    dispatch(timerOperations[name]());
  };
  return (
    <div>
      {!time || (time && !setIntervalId) ? (
        <button type="button" name="onStart" onClick={hendlerBtn}>
          Start
        </button>
      ) : (
        <button type="button" name="onStop" onClick={hendlerBtn}>
          Stop
        </button>
      )}
      <button
        type="button"
        name="onWait"
        onClick={hendlerBtn}
        disabled={!time || (time && !setIntervalId)}
      >
        Wait
      </button>
      <button
        type="button"
        name="onReset"
        onClick={hendlerBtn}
        disabled={!time}
      >
        Reset
      </button>
    </div>
  );
}
