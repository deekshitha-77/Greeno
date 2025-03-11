const app = require('./index'); // Import the Express app
const { PORT = 3001 } = process.env;

app.listen(PORT, () => {
  console.log(`Server is listening at http://localhost:${PORT}`);
});
