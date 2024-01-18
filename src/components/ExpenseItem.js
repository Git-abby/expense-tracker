import React, { useContext, useEffect, useState } from 'react'
import {TiDelete} from 'react-icons/ti';
import { AppContext } from '../context/AppContext';
import axios from 'axios';

export const ExpenseItem = (props) => {

    const {dispatch} = useContext(AppContext);

    // console.log("Props", props);
      
    const handleRemoveExpense = () =>{
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        })
    }
  return (
    <li className='list-group-item d-flex justify-content-between align-items-center' key={props.id}>
        {props.name}
        <div>
            <span className='badge badge-primary badge-pill text-black mr-3'>
                ${props.cost}
            </span>
            <TiDelete size='1.5em' onClick={handleRemoveExpense}></TiDelete>
        </div>
    </li>
  )
}
