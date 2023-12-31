//Dependencies

const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const defCurrentUser = require('./middleware/defCurrentUser')
const { Sequelize } = require('sequelize');
const path = require('path');
const cors = require('cors');
const methodOverride = require('method-override')


//Configuration / MiddleWare
require('dotenv').config()
app.use(cors());
app.use(express.json()); 
app.use(bodyParser.json())
app.use(methodOverride('_method'))
//  app.use(express.static('public'))
app.use(express.urlencoded({extended:true}));  //was false before
app.use(bodyParser.urlencoded({ extended: true }));  //added


 app.use(express.static(path.join(__dirname,'../build')))

app.use(defCurrentUser)

//Controllers
const snacksController = require('./controllers/snacks_controller');
app.use('/api/Snacks', snacksController)

const usersController = require('./controllers/users_controller');
app.use('/api/users', usersController)

app.use('/api/authen',require('./controllers/auth'))

//Listen
app.listen( 4005, () => {
    console.log(`Server is runnning on port ${4005}`)
})

app.get('*',(req,res) => {
    res.sendFile(path.join(__dirname,'../build/index.html'))
})