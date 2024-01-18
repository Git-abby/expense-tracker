
const express = require('express');
const myApp = express();
const cors = require("cors");
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/mywebsite');

const Expense = mongoose.model('Expense', {
   id: String,
   name: String,
   cost: Number    
})

console.log("App is listening PORT 5000")
myApp.use(express.json());
myApp.use(cors());

myApp.get("/", (req, resp) => {
 
    resp.send("App is Working");
    // You can check backend is working or not by 
    // entering http://loacalhost:5000
     
    // If you see App is working means
    // backend working properly
});
myApp.post("/add", async (req, resp) => {
    try {
        const expense = new Expense(req.body);
        let result = await expense.save();
        result = result.toObject();
        if (result) {
            // delete result.password;
            resp.send(req.body);
            console.log(result);
        } else {
            console.log("Expenses Went wrong..");
        }
 
    } catch (e) {
        resp.send("Something Went Wrong");
    }
});
myApp.get('/getallexpenses', async (req, res, next) => {
    try{
        const expense = await Expense.find();

        return res.status(200).json({
            success: true,
            count: expense.length,
            data: expense,
          });
    }catch(e){
        console.log(err);
        res.status(500).json({ error: 'server error' });
    }
});
myApp.listen(5000);