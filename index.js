const express = require('express');
const app = express();
const morgan = require('morgan');
const { PORT = 3000 } = process.env;

app.use(morgan('dev'));
app.use(express.static('public'));

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server is listening at http://localhost:${PORT}`);
  });
}

module.exports = app; // Export the app for testing