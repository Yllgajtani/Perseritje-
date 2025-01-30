// //Route parametri 
// const express = require('express');
// const app = express();

// //localhost:8080/user/Yll
// app.get('/user/:name/:city', function(req, res) {
//     const name = req.params.name;
//     const city = req.params.city;
//     res.send(`Hello ${name}, you live in ${city}!`);
// });

// app.listen(8080, () => {
//     console.log('Server is running on http://localhost:8080');
// });

const express = require('express');
const app = express();

//konektimi i ejs me views folderin
app.set('views engine','ejs');

app.get('/card', function(req , res){
const name = req.query.name ||'Emri nuk eshte dhene';
const age = req.query.age ||'Mosha nuk eshte dhene';
const profession = req.query.profession ||'Profesioni nuk eshte dhene';

res.render('index',{name , age , profession})
});

app.listen(8080, () => {
    console.log('Server is running on http://localhost:8080');
});