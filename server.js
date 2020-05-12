//import
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 5000;


//Middleware -----------------
app.use(cors());
app.use(express.json());
//----------------------------
    
//mongodb connection ------------------------------------------------------------------------------------------------------
mongoose.connect('mongodb+srv://ritmillio:ritmillio@cluster0-ry1yi.mongodb.net/test?retryWrites=true&w=majority' ,
    {
        useNewUrlParser : true,
        useCreateIndex : true,
        useUnifiedTopology: true
    })
    .then(()=>{
        console.log("-------------------------------------------");
    })
    .catch(err => {
        console.log(`db conn err: ${err.message}`);
    });

mongoose.connection.once('open', () => {
    console.log("MongoDB connection established successfully");
})
//------------------------------------------------------------------------------------------------------------------------

const itemsRouter = require('./routes/items');
const usersRouter = require('./routes/users');

app.use('/items' , itemsRouter);
app.use('/users' , usersRouter);

//listener ------------------------------------------
process.setMaxListeners(0); //no limit

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

//------------------