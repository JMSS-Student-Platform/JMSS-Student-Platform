const express = require('express');
const app = express();
const port = process.env.PORT || 80;
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
require('dotenv').config();
app.use(cors());

mongoose.connect(process.env.MONGO_CONNECT, { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to MongoDB'));

app.use(express.static('public'));
app.get('*', (req, res) => {
   res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});
app.listen(port, () => {
   console.log(`Server is up at port ${port}`);
});