const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose');

const app = express();
require('dotenv').config();

app.use(express.json());
app.use(cors());


mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useNewUrlParser: true,
}).then(() => {
    console.log("Connected to MongoDB");
}).catch(err => {
    console.log(err);
});


app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
})