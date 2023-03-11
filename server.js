const express = require('express');
const path = require('path');

const app = express();

// Serve static assets
app.use(express.static(path.join(__dirname, 'build')));

// Serve React application
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build/index.html'));
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});