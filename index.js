const router = require('./routes/router');
const express = require('express');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static(__dirname + '/client/dist'));
app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(router);

app.listen(PORT,()=>{
    console.log(`Server has been stared on port ${PORT}....`);
})
