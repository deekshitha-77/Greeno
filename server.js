const app = require('./index');
const { PORT = 3000 } = process.env;

const server = app.listen(PORT, () => {
  console.log(`Server is listening at http://localhost:${PORT}`);
});

module.exports = server; // Export server for potential use
