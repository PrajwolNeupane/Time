import express from 'express';
const app = express();
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(express.static('public'));

// Define routes
app.get('/', (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// Start the server
app.listen(process.env.PORT || 3000, () => {
  console.log(`Server is running`);
});