const express = require('express')
const bodyParser = require('body-parser')
const mysql = require('mysql');
const { studentRouter } = require('./src/modules/student/student.route');

const app = express()
const port = process.env.PORT || 5000;

// Parsing middleware
// Parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false })); // Remove 
app.use(express.urlencoded({extended: true})); // New
// Parse application/json
// app.use(bodyParser.json()); // Remove
app.use(express.json()); // New

// MySQL Code goes here

// Listen on enviroment port or 5000
app.listen(port, () => console.log(`Listening on port ${port}`))

// sql Pool

const pool  = mysql.createPool({
  connectionLimit : 10,
  host            : 'localhost',
  user            : 'root',
  password        : '',
  database        : 'mysqldb'
})

// APIs Routes

app.use("/api/students", studentRouter)

// Get all students
// app.get('', (req, res) => {
//   pool.getConnection((err, connection) => {
//       if(err) throw err
//       console.log('connected as id ' + connection.threadId)
//       connection.query('SELECT * from students', (err, rows) => {
//           connection.release() // return the connection to pool
//           if (!err) {
//               res.send(rows)
//           } else {
//               console.log(err)
//           }

//           // if(err) throw err
//           console.log('The data from students table are: \n', rows)
//       })
//   })
// })

// Get an students
// app.get('/:id', (req, res) => {
//   pool.getConnection((err, connection) => {
//       if(err) throw err
//       connection.query('SELECT * FROM students WHERE student_id = ?', [req.params.id], (err, rows) => {
//           connection.release() // return the connection to pool
//           if (!err) {
//               res.send(rows)
//           } else {
//               console.log(err)
//           }
          
//           console.log('The data from students table are: \n', rows)
//       })
//   })
// });
// Get an students
// app.get('/:id', (req, res) => {
//   // log
//   // console.log("req.query.col=",req.query.col.trim())
//   const col = req.query?.col;
//   // const col ="*" ;
//   console.log("req.query.col=",typeof(col))
//   console.log("req.params.id=",typeof(req.params.id))
//   pool.getConnection((err, connection) => {
//       if(err) throw err
//       connection.query(`SELECT ${col} FROM students WHERE student_id = ${req.params.id}`, (err, rows) => {
//           connection.release() // return the connection to pool
//           if (!err) {
//               res.send(rows)
//               //log
//               console.log(rows)
//           } else {
//               console.log(err)
//           }
          
//           // console.log('The data from students table are: \n', rows)
//       })
//   })
// });
