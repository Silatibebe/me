const express = require('express');
const ejs = require('ejs');
const path = require('path');
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.get('/', (req,res)=>{
 res.render('index',{people: [{name: 'dave'},{name: 'mike'}]});
});
app.listen(3000, ()=> console.log('server running at port 3000!!!'));