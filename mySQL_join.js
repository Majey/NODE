const dbase = require('./mySQL_connection');

dbase.connect((err) => {
    if (err) {
        throw err;
    }

    //********* RIGHT JOIN ***********

    let sql = `SELECT students.name as StudentName, students.email, 
    department.name as StudentDepartment FROM students RIGHT JOIN
    department ON department.id = students.dept_id`;

    /*
    //********* LEFT JOIN ***********

    let sql = `SELECT students.name as StudentName, students.email, 
    department.name as StudentDepartment FROM students LEFT JOIN
    department ON department.id = students.dept_id`;

    */

    /*    
    //********* INNER JOIN **********

    let sql = `SELECT students.name as StudentName, students.email, 
    department.name as StudentDepartment FROM students INNER JOIN
    department ON department.id = students.dept_id`;

    */

    dbase.query(sql, (err, res) => {
      if (err) {
        throw err;
      }
      console.log(res);
    });
});

