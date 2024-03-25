const express = require('express');
const mongoose = require('mongoose');
const usersRouter = require('./routes/users');
const submissionsRouter = require('./routes/submissions');
const cors = require('cors');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());
function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
  
    if (token == null) return res.sendStatus(401);
  
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) return res.sendStatus(403);
      req.user = user;
      next();
    });
  }

const uri = process.env.ATLAS_URI;
mongoose.connect(uri);

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const port = process.env.PORT || 5000;

//routes
app.use('/users', usersRouter);
app.use('/submissions', submissionsRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
