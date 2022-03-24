const express = require('express');
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/social-network-api", {
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
}, err => {
    if(err) throw err;
    console.log('Connected to MongoDB!!!')
})
mongoose.set("debug", true);

app.use(require('./routes'));

app.listen(PORT, () => console.log(` Connected  on http://localhost:${PORT}`));
