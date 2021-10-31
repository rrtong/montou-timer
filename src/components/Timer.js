import { useState, useEffect } from "react";
import moment from "moment";

// const format = "hh:mm:ss";
const timerEnd = moment().add(2, "hours");

const Timer = () => {
  const [timer, setTimer] = useState(moment());
  // const [showGreen, setShowGreen] = useState(false);
  let timeDiff = moment.duration(timerEnd.diff(timer));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer.clone().add(1, "seconds"));

      // console.log(timer.clone().format(format));
      // if (timer.clone().isSame(timerEnd) || timer.clone().isAfter(timerEnd)) {
      //   setShowGreen(true);
      // }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div>
        <span>{timeDiff.hours()}h</span>
        <span>{timeDiff.minutes()}m</span>
        <span>{timeDiff.seconds()}s</span>
      </div>
      <button
        onClick={() => {
          setTimer((prevTimer) => prevTimer.clone().add(1, "seconds"));
        }}
      >
        -1 second
      </button>
      <button
        onClick={() => {
          setTimer((prevTimer) => prevTimer.clone().add(1, "minutes"));
        }}
      >
        -1 minute
      </button>
      <button
        onClick={() => {
          setTimer((prevTimer) => prevTimer.clone().add(5, "minutes"));
        }}
      >
        -5 minutes
      </button>
      {/* <div
        style={{
          backgroundColor: showGreen && "green",
          height: "100px",
          width: "100px",
        }}
      ></div> */}
    </>
  );
};

export default Timer;
