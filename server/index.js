const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// configure our express instance with some body-parser settings
// including handling JSON data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const routes = require('./router/routes.js')(app);

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is running on PORT ${port}`);
});