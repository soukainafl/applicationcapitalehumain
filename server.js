const http= require('http');
const fs=require('fs');
const express= require('express');
const path =require('path');
const app= express();
const bodyParser = require('body-parser')
const data = fs.readFileSync('./salaire.json');
var parsedata = JSON.parse(data);
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use('/',express.static(path.join(__dirname,'assets')));
app.get('/salaire', (req, res) => {
    

        fs.readFile('./salaire.json', 'utf-8', function (err, data) {
            if (err) throw err;
    
            var arrayOfObjects = JSON.parse(data);
    
           // res.send(arrayOfObjects);
            console.log(arrayOfObjects);
    
        });
    
    res.sendFile(path.join(__dirname, 'salaire.html'));

});
app.get('/departement', (req, res) => {
    res.sendFile(path.join(__dirname, 'departement.html'));
});


// app.get('/userss', function (req, res) {

//     fs.readFile('./department.json', 'utf-8', function (err, data) {
//         if (err) throw err;

//         var arrayOfObjects = JSON.parse(data);

//         res.send(arrayOfObjects);
//         console.log(arrayOfObjects);

//     });
// })






app.listen(4000,()=>
{
 console.log('démarée server');
});
