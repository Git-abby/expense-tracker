import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

export const AddBudget = () => {
  const { dispatch } = useContext(AppContext);

  const [budget, setBudget] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch({
      type: "ADD_BUDGET",
      payload: budget,
    });
    setBudget('');
  };
  return (
    <form onSubmit={onSubmit}>
      <div className="row">
        <div className="col-sm">
          <input
            type="text"
            className="form-control"
            placeholder="Enter your budget here..."
            onChange={(e) => setBudget(e.target.value)}
            value={budget}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-sm">
          <button className="btn btn-primary mt-3">Add Budget</button>
        </div>
      </div>
    </form>
  );
};
