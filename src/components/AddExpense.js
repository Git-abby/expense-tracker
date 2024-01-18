import React, { useContext, useEffect, useState } from "react";

import { v4 as uuidv4 } from "uuid";
import Speech from 'react-speech';

import { expensesCollection } from "../firebase";
import { addDoc } from "firebase/firestore";
import { AppContext } from "../context/AppContext";
import axios from "axios";

export const AddExpense = () => {
  const [name, setName] = useState("");
  const [cost, setCost] = useState("");
  const [items, setItems] = useState();

  const { dispatch } = useContext(AppContext);

  //   const saveToFirebase = async (e) => {
  //     e.preventDefault();

  //     const expense = {
  //       id: uuidv4(),
  //       name: name,
  //       cost: parseInt(cost),
  //     };

  //     try {
  //       await addDoc(expensesCollection, expense);
  //         console.log(expense);
  //       // Dispatch the expense to the context
  //       dispatch({
  //         type: "ADD_EXPENSE",
  //         payload: expense,
  //       });
  //       // Clear the form fields
  //       setName("");
  //       setCost("");
  //     } catch (err) {
  //       console.error("Error saving expense to Firestore:", err);
  //     }
  const handleOnSubmit = async (e) => {
    // e.preventDefault();
    let result = await fetch(
    'http://localhost:5000/add', {
        method: "post",
        body: JSON.stringify({
          id: uuidv4(),
          name: name,
          cost: cost
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    result = await result.json();
    console.warn(result);
    if (result) {
        alert("Data saved succesfully");
        setName("");
        setCost("");
    }
}

useEffect(() => {
  axios
    .get("http://localhost:5000/getallexpenses")
    .then((response) => console.error(response.data))
    .catch((error) => console.error(error));
},);

  const onSubmit = (e) => {
    e.preventDefault();

    const expense = {
      id: uuidv4(),
      name: name,
      cost: parseInt(cost),
    };

    dispatch({
      type: "ADD_EXPENSE",
      payload: expense,
    });
    // console.log(expense);
    setName("");
    setCost("");
  };
  return (
    <form onSubmit={handleOnSubmit}>
      <div className="row">
        <div className="col-sm">
          <label htmlFor="name">Name</label>
          <input
            required
            type="text"
            className="form-control"
            id="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div className="col-sm">
          <label htmlFor="name">Cost</label>
          <input
            required
            type="text"
            className="form-control"
            id="cost"
            onChange={(e) => setCost(e.target.value)}
            value={cost}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-sm">
          <button type="submit" className="btn btn-primary mt-3">
           Add
          </button>
        </div>
      </div>
    </form>
  );
};

/*

const handleOnSubmit = async (e) => {
        e.preventDefault();
        let result = await fetch(
        'http://localhost:5000/register', {
            method: "post",
            body: JSON.stringify({ id, name, cost }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        result = await result.json();
        console.warn(result);
        if (result) {
            alert("Data saved succesfully");
            setName("");
            setCost("");
        }
    }
*/