require('dotenv').config();
const express           = require('express');
/*const session           = require('express-session');
const expHandlB         = require('express-handlebars');
const mongoose          = require('mongoose');
const passport          = require('passport');
const localStrategy     = require('passport-local').Strategy;
const bcrypt            = require('bcrypt');*/
const bodyParser        = require('body-parser')
const { establishDbConnection } = require('./config/connection')
const cors          = require('cors')       
const morgan            = require('morgan')
const { apiRoutes }     = require('./routes')
const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  defaultMeta: { service: 'your-service-name' },
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});

const port = process.env.SERVER_PORT || 3000

const app = express()


// Establish Connection to MongoDB
establishDbConnection()

// Turn on CORS Middleware
var corsOptions = {
    origin: "http://localhost:8081"
  };
  
  app.use(cors(corsOptions));
app.use(cors)

// Mount logging middleware
app.use(morgan(process.env.MORGAN_LOG_TEMPLATE || 'tiny'))

// Start Parsing request bodies as json
app.use(bodyParser.json())

// Register our API Routes
app.use('/api', apiRoutes)
// Spin up the Application
app.listen(port, () => {
    logger.log('info',`Server Running on port ${port}`)

})