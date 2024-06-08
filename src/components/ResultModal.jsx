import React from "react";

const ResultModal = (props) => {
  return (
    <dialog className="result-modal" open>
      <h2>You {props.result}</h2>
      <p>
        The target time was <strong>{props.targetTime} seconds.</strong>
      </p>
      <p>
        You stopped the timer with <strong>X seconds left.</strong>
      </p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
};

export default ResultModal;
