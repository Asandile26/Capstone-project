const express = require('express');
// route
const router = require('./controller');
// cors
const cors = require('cors');
// port 
const port = parseInt(process.env.PORT) || 1999;
// Express app
const app = express();
// Middleware
const {errorHandling} = require('./middleware/ErrorHandling');
//
const cookieParser = require('cookie-parser');
//connecting frontend and backend 
app.use((req, res, next)=> {
        res.header('Access-Control-Allow-Origin', "*")
        res.header("Access-Control-Allow-Credentials", "true")
        res.header("Access-Control-Allow-Methods", "*")
        res.header("Access-Control-Allow-Headers", "*")
        next();
});
// cookieParser & Router
// cookieParser should be set before router
app.use(
    cookieParser(),
    cors(),
    router
);
app.use(
    express.json(),
    express.urlencoded({
        extended: true
    })
);
// Server is running
app.listen(port, ()=> {
    console.log(`server is going for a run  ${port}`)
});
// Handling all errors
app.use(errorHandling);