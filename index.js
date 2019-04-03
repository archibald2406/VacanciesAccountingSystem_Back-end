const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { mongoose } = require('./db');
const userController = require('./controllers/usersController');
const vacanciesController = require('./controllers/vacanciesController');
const vacanciesStatusController = require('./controllers/vacanciesStatusController');
const candidatesController = require('./controllers/candidatesController');

const app = express();
app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:4200' }));

app.listen(3000, () => console.log('Server started at port: 3000.'));

app.use('/users', userController);
app.use('/vacancies', vacanciesController);
app.use('/vacanciesStatuses', vacanciesStatusController);
app.use('/candidates', candidatesController);