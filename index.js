const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

// Define routes
app.get('/', (req, res) => {
  res.send('/index.html');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});