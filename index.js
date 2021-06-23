const bodyParser = require('body-parser');
const express = require('express');
const app = express();
require('./models/dbConfig')
const postsRoutes = require("./routes/postsController");
const mongoose = require("mongoose");
const cors = require('cors');


mongoose.set('useFindAndModify',false);

app.use(cors());
app.use(bodyParser.json());
app.use('/posts',postsRoutes);
app.listen(5500,()=> console.log("Server started: 5500"));