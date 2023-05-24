import express from 'express';
const app = express();
import { dirname } from 'path';
import { fileURLToPath } from 'url';

app.use(express.static('public'));

// Define routes
app.get('/', (req, res) => {
  res.sendFile("index.html",{root: path.join(__dirname, 'public')});
});

// Start the server
app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running`);
});