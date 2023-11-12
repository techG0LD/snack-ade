//Dependencies
require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const defCurrentUser = require('./middleware/defCurrentUser')
const { Sequelize } = require('sequelize');
const path = require('path');
const cors = require('cors');
const methodOverride = require('method-override')


//Configuration / MiddleWare
app.use(cors());
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.json())
app.use(methodOverride('_method'))
// app.use(express.json());
// app.use(express.static(path.join(__dirname,'../build')))
app.use('/api/authen',require('./controllers/auth'))
app.use(defCurrentUser)

//Controllers
const snacksController = require('./controllers/snacks_controller');
app.use('/api/Snacks', snacksController)

const usersController = require('./controllers/users_controller');
app.use('/api/users', usersController)



//Listen
app.listen( 4005 || process.env.PORT, () => {
    console.log(`Server is runnning on port ${(4005 || process.env.PORT )}`)
})