const express = require('express');

const bodyParser = require('body-parser');

const mongoose = require('mongoose');



// Init Express
const app = express();
app.use(bodyParser.json());

// Db Stuff
const dbUrl = 'mongodb+srv://admin:<yourpassword>@shop.d7ubw.mongodb.net/<yourdatabase>?retryWrites=true&w=majority';
mongoose.connect(dbUrl, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true,useFindAndModify: false})
        .then(res => console.log('Connected To Database...'))
        .catch(err => console.log(err, 'Connection Error'));

// Route Stuff       
const productRoute = require('./routes/productRoute');
app.use('/api/products', productRoute);

// Port Stuff
const port = process.env.PORT || 5000;
app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);  
})