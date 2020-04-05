const fs=require('fs');
const url=require('url');

function routing(req,res)
   {
    const path=url.parse(req.url).pathname
    console.log(path);
   // name de un fichier par exp youcode.com/home 
   switch(path)
   {
       case'/ salaries':
      handelrequest('salaire.html',res)
       break;
       case'/departement':
       handelrequest('departement.html',res)
       break;
      
       default:
           res.end('this page not found');
           break;
   }


}
  function handelrequest(filephath,res)
  {
     fs.readFile(filephath,nul,(error,data)=>
   {
        if(error)
      {
          res.end('file have error');
      }else
      {
          res.end(data);
      }
      
    })
  }
   module.exports =routing;