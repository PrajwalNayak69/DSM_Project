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
//select all from dependent
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
// Query1
company.get('/query1', function(request, response){
  var result;
  fs.readFile('query1.ejs', 'utf8', function(error, data){
    var x = "select w.pno from works_on as w, employee as e where w.ssn=e.ssn and e.lname='smith' union select p.pno from department as d, employee as e, project as p where d.mgrssn=e.ssn and d.dno=p.dno and e.lname='smith'";
    connection.query(x, (error, result) => {

        response.render('/Users/prajwal/Desktop/VS code new/DSM Project/Server/Views' + '/query1', { data: result })
        console.log("Query results(inside): " + JSON.stringify(result));
      });
      console.log("Query results(outside): " + JSON.stringify(result));
  });
});
//Query2
company.get('/query2', function(request, response){
  var result;
  fs.readFile('query2.ejs', 'utf8', function(error, data){
    var x = "SELECT E.Fname, E.salary AS old_sal, E.salary*1.1 AS new_sal FROM employee as E, works_on as W, project as p WHERE E.SSN=W.SSN and W.Pno=p.pno and p.pname='sql'";
    connection.query(x, (error, result) => {

        response.render('/Users/prajwal/Desktop/VS code new/DSM Project/Server/Views' + '/query2', { data: result })
        console.log("Query results(inside): " + JSON.stringify(result));
      });
      console.log("Query results(outside): " + JSON.stringify(result));
  });
});
//Query3
company.get('/query3', function(request, response){
  var result;
  fs.readFile('query3.ejs', 'utf8', function(error, data){
    var x = "select d.dname, sum(e.salary) as tot_sal, min(e.salary) as min_sal, max(e.salary) as max_sal, avg(e.salary) as avg_sal from employee as e, department as d where e.dno=d.dno and d.dname='is' GROUP BY d.dname, d.dno";
    connection.query(x, (error, result) => {

        response.render('/Users/prajwal/Desktop/VS code new/DSM Project/Server/Views' + '/query3', { data: result })
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

