const express = require('express');
const app = express();

app.use(express.static('public'));

// Define routes
app.get('/', (req, res) => {
  res.send('/index.html');
});

// Start the server
app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running`);
});