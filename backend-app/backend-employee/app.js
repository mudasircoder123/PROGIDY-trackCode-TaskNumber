const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoDb = require('./db');
const empRoutes = require('./EmployeeRoutes');

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Connect backend with DB
mongoDb();

// Routes
app.use('/api', empRoutes);

const PORT = 3600;

app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}`);
});