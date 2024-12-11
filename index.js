const express = require('express');
const methodOverride = require('method-override');
const path = require('path');
const itemRoutes = require('./server/routes/itemRoutes');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));

app.use('/', itemRoutes);

app.listen(3000, () => {
    console.log("Serving on port 3000.");
    console.log("Open `http://localhost:3000`");
})