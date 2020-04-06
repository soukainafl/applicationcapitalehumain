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
    res.sendFile(path.join(__dirname, 'salaire.html'));

});
app.get('/departement', (req, res) => {
    res.sendFile(path.join(__dirname, 'departement.html'));
});


 app.get('/userss', function (req, res) {

     fs.readFile('./salaire.json', 'utf-8', function (err, data) {
        if (err) throw err;

         var arrayOfObjects = JSON.parse(data);

         res.send(arrayOfObjects);
         console.log(arrayOfObjects);

    });
 });

 app.get('/departe', function (req, res) {

    fs.readFile('./department.json', 'utf-8', function (err, data) {
       if (err) throw err;

        var arrayDepartement = JSON.parse(data);

        res.send(arrayDepartement);
        console.log("arrayDepartement" + arrayDepartement);

   });
});

app.post('/salaire',function(req, res){
    var id_dep = req.body.id_dep;
    var Matricule = req.body.Matricule;
    var nom = req.body.nom;
    var Prenom = req.body.Prenom;
    var Age = req.body.Age;
    var salaire = req.body.salaire;

    fs.writeFile('salarie.json',JSON.stringify(list1,null,5),(err)=>{
        console.log(err);
    });
fs.readFile('salaire.json', 'utf-8', function (err, data) {
	if (err) throw err;

	var arrayOfObjects = JSON.parse(data);
	arrayOfObjects.push({
         id_dep : id_dep,
         Matricule : Matricule,
         nom: nom,
         Prenom : Prenom,
         Age : Age,
         salaire : salaire
    
	});

    console.log(arrayOfObjects);
    
    fs.writeFile('salaire.json', JSON.stringify(arrayOfObjects), 'utf-8', function(err) {
        if (err) throw err;
        console.log('Done!');
        res.sendFile(__dirname + "/salaire.html");
  
    });
});
    
});

app.use("/", express.static(__dirname + "/"));




app.listen(4000,()=>
{
 console.log('démarée server');
});
