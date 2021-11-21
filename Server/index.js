import express from "express";
import fs from "fs";


const company = express();
company.set('view engine','ejs');

import connection from "./Database/connection";

//API Routes
// import Employee from "./API/employee";

// company.use("/employee", Employee)


connection.connect((err) => {
  if(err) throw err;
  console.log('Connected to MySQL Server!');
    //Select all from employee
    company.get('/employee', function(request, response){
      var result;
      fs.readFile('employee.ejs', 'utf8', function(error, data){
  
        connection.query('SELECT * FROM employee', (error, result) => {

            response.render('/Users/prajwal/Desktop/VS code new/DSM Project/Server/Views' + '/employee', { data: result });
            console.log("Query results(inside): " + JSON.stringify(result));
          });
          console.log("Query results(outside): " + JSON.stringify(result));
      });
  });
  //select all from department
  company.get('/department', function(request, response){
    var result;
    fs.readFile('department.ejs', 'utf8', function(error, data){

      connection.query('SELECT * FROM department', (error, result) => {

          response.render('/Users/prajwal/Desktop/VS code new/DSM Project/Server/Views' + '/department', { data: result })
          console.log("Query results(inside): " + JSON.stringify(result));
        });
        console.log("Query results(outside): " + JSON.stringify(result));
    });
});
//select all from dlocation
company.get('/dlocation', function(request, response){
  var result;
  fs.readFile('dlocation.ejs', 'utf8', function(error, data){

    connection.query('SELECT * FROM dlocation', (error, result) => {

        response.render('/Users/prajwal/Desktop/VS code new/DSM Project/Server/Views' + '/dlocation', { data: result })
        console.log("Query results(inside): " + JSON.stringify(result));
      });
      console.log("Query results(outside): " + JSON.stringify(result));
  });
});

});
//select all from projects
company.get('/project', function(request, response){
  var result;
  fs.readFile('project.ejs', 'utf8', function(error, data){

    connection.query('SELECT * FROM project', (error, result) => {

        response.render('/Users/prajwal/Desktop/VS code new/DSM Project/Server/Views' + '/project', { data: result })
        console.log("Query results(inside): " + JSON.stringify(result));
      });
      console.log("Query results(outside): " + JSON.stringify(result));
  });
});
//select all from works_on
company.get('/works_on', function(request, response){
  var result;
  fs.readFile('works_on.ejs', 'utf8', function(error, data){

    connection.query('SELECT * FROM works_on', (error, result) => {

        response.render('/Users/prajwal/Desktop/VS code new/DSM Project/Server/Views' + '/works_on', { data: result })
        console.log("Query results(inside): " + JSON.stringify(result));
      });
      console.log("Query results(outside): " + JSON.stringify(result));
  });
});
//select all from works_on
company.get('/dependent', function(request, response){
  var result;
  fs.readFile('dependent.ejs', 'utf8', function(error, data){

    connection.query('SELECT * FROM dependent', (error, result) => {

        response.render('/Users/prajwal/Desktop/VS code new/DSM Project/Server/Views' + '/dependent', { data: result })
        console.log("Query results(inside): " + JSON.stringify(result));
      });
      console.log("Query results(outside): " + JSON.stringify(result));
  });
});




company.get("/", (req, res) => res.render('home')
);

company.listen(3000, () => {
    console.log('Server is running at port 3000');
});

