const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const app = express();


app.use(express.json());


var corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions))
routes(app);

app.listen(8000, function(){
    console.log("Server started")
})