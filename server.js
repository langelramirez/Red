const express = require('express');
const bodyParser = require('body-parser');

const userController = require('./controllers/userController');
const symptomController = require('./controllers/symptomController');
const exportController = require('./controllers/exportController');

const app = express();
const db = require('./models/db');
const PORT = 3000;

// Automatically parse urlencoded body content from incoming requests and 
// place it in req.body
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

///////////////////////////////////////////////////////////////////////////////
app.get('/', (req, res) => {
    res.send('GET request to the homepage');
});

app.post('/', (req, res) => {
    res.send('POST request to the homepage');
});

app.post('/signup', userController.createUser);
app.post('/period/create', symptomController.createSymptom);
app.post('/period/readAll', symptomController.readSymptoms);
app.post('/period/update/:id', symptomController.updateSymptom);
app.post('/period/delete/:id', symptomController.deleteSymptom);
app.post('/symptom/create', symptomController.createSymptom);
app.post('/symptom/readAll', symptomController.readSymptoms);
app.post('/symptom/update/:id', symptomController.updateSymptom);
app.post('/symptom/delete/:id', symptomController.deleteSymptom);




app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
