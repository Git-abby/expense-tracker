import React, { useContext, useEffect, useState } from "react";
import { ExpenseItem } from "./ExpenseItem";
import { AppContext } from "../context/AppContext";
import axios from "axios";

export const ExpenseList = () => {
  const { expenses } = useContext(AppContext);
  const [searchExpense, setSearchExpense] = useState("");
  const [priceFilter, setPriceFilter] = useState(0);
  const [buttons, setButtons] = useState([
    { value: 100, isActive: false },
    { value: 200, isActive: false },
    { value: 300, isActive: false },
  ]);

  const [isActive, setIsActive] = useState(false);

  const [items, setItems] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:5000/getallexpenses")
      .then((response) => setItems(response.data))
      .catch((error) => console.error(error));
  }, []);

  // console.log(items);

  const handleButtonClick = (value) => {
    setPriceFilter(value);
    setIsActive(true);
  };

  //   console.log(active);
  //   console.log(priceFilter);
  return (
    <>
      <div className="row">
        <div className="col-sm">
          <input
            type="text"
            className="form-control form-input"
            placeholder="Search Expense..."
            onChange={(e) => setSearchExpense(e.target.value)}
          />
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-1">
          <button
            type="button"
            className={`btn ${
              isActive ? "btn-primary" : "btn-outline-secondary"
            }`}
            onClick={() => handleButtonClick(50)}
            // onClick={(e) => setPriceFilter(e.target.value)}
          >
            $50
          </button>
        </div>
        <div className="col-1">
          <button
            className="btn btn-outline-secondary"
            value="100"
            onClick={() => setPriceFilter(100)}>
            $100
          </button>
        </div>
        <div className="col-1">
          <button
            className="btn btn-outline-secondary"
            value="300"
            onClick={() => setPriceFilter(300)}>
            $300
          </button>
        </div>
        <div className="col-1">
          <button
            className="btn btn-outline-secondary"
            value="500"
            onClick={() => setPriceFilter(500)}>
            $500
          </button>
        </div>
        <div className="col-1">
          <button
            className="btn btn-outline-secondary"
            value="0"
            onClick={() => setPriceFilter(0)}>
            Clear
          </button>
        </div>
      </div>
      {/* <ul className="list-group mt-3">
        {expenses
          .filter((exp) => {
            if (searchExpense.toLowerCase() === "" && priceFilter === 0) {
              return exp;
            } else {
              return (
                (priceFilter === 0 || exp.cost <= priceFilter) &&
                exp.name.toLowerCase().includes(searchExpense.toLowerCase())
              );
            }
          })
          .map((exp) => {
            return <ExpenseItem id={exp.id} name={exp.name} cost={exp.cost} />;
          })}
      </ul> */}
      <ul className="list-group mt-3">
        {items &&
          Object.values(items.data).map((item) => {
            // console.log("inside Map", item);
            return (
              <ExpenseItem
                id={item.id}
                key={item.id}
                name={item.name}
                cost={item.cost}
              />
            );
          })}
      </ul>
      {/* if(sear.toLowerCase() === ''){ return exp;} else if(exp.name.lower().includes(search){return exp;} if(priceFilter === 0) {retuen exp;} else if(exp.price <= priceFilter){ return exp;}) */}
    </>
  );
};
