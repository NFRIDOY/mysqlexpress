const pool = require("./../../utils/connection")

const getStudent = (req, res) => {
  console.log("Req: ", req.params);
  console.log("Get Student");

  pool.getConnection((err, connection) => {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    connection.query("SELECT * from students", (err, rows) => {
      connection.release(); // return the connection to pool
      if (!err) {
        res.send(rows);
      } else {
        console.log(err);
      }

      // if(err) throw err
      console.log("The data from students table are: \n", rows);
    });
  });
};

export const studentController = {
  getStudent,
};
