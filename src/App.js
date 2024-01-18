import React, { useEffect } from "react";
//css
import "bootstrap/dist/css/bootstrap.min.css";
import { Budget } from "./components/Budget";
import { Remaining } from "./components/Remaining";
import { ExpenseTotal } from "./components/ExpenseTotal";
import { ExpenseList } from "./components/ExpenseList";
import { AddExpense } from "./components/AddExpense";
import { AppProvider } from "./context/AppContext";
import { AddBudget } from "./components/AddBudget";
// import { ReactSpeech } from "react-speech";
import Say from 'react-say';

import Speech from "react-speech";

function App() {
  
  const username = "Muhammad"
  useEffect(() => {
    // Function to speak the welcome message
    const speakWelcomeMessage = () => {
      const welcomeMessage = new SpeechSynthesisUtterance(`Welcome to the App ${username}`);
      window.speechSynthesis.speak(welcomeMessage);
    };
//Hi 

    // Speak the welcome message when the component mounts
    speakWelcomeMessage();

    // Clean up the speech synthesis when the component unmounts
    return () => {
      window.speechSynthesis.cancel();
    };
  }, []); // Empty dependency array ensures the effect runs only once on mount


  return (
    <AppProvider>
      <div className="container">
        

        <h1 className="mt-3">My Budget Planner</h1>
        <div className="row mt-3">
          <div className="col-sm">
            <Budget />
          </div>
          <div className="col-sm">
            <Remaining />
          </div>
          <div className="col-sm">
            <ExpenseTotal />
          </div>
        </div>
        <AddBudget />
        <h3 className="mt-3">Expenses</h3>
        <div className="row mt-3">
          <div className="col-sm">
            <ExpenseList />
          </div>
        </div>
        <h3 className="mt-3">Add Expense</h3>
        <div className="row mt-3">
          <div className="col-sm">
            <AddExpense />
          </div>
        </div>
      </div>
    </AppProvider>
  );
}

export default App;


