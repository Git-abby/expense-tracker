import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

export const ExpenseTotal = () => {
    const { expenses} = useContext(AppContext);

    const totaExpenses = expenses.reduce((total, item)=>{
        return(total += item.cost);
    }, 0);

  return (
    <div className='alert alert-primary'>
        <span>Spent so far: ${totaExpenses}</span>
    </div>
  )
}
