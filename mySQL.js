const dbase = require('./mySQL_connection');

dbase.connect((err) => {
    if (err) {
        throw err;
    }

    //*********************** DELETE RECORDS IN MYSQL DATABASE **************************** */

    let sql = "DELETE FROM students WHERE id=7";
    dbase.query(sql, (err, res) => {
      if (err) {
        throw err;
      }
      console.log(res);
    });

    //*********************** UPDATE RECORDS IN MYSQL DATABASE **************************** */

    /*
    
    let sql = "UPDATE students SET name='Morenah' WHERE id=8";
    dbase.query(sql, (err, res) => {
      if (err) {
        throw err;
      }
      console.log(res);
    });

    */

    //*********************** FETCH DATA FROM MYSQL DATABASE **************************** */

    /*

    let sql = "SELECT id, name FROM students";
    // let sql = "SELECT * FROM students ORDER BY id desc";
    // let sql = "SELECT * FROM students WHERE name LIKE '%a%'";
    // let sql = "SELECT * FROM students WHERE id=3";
    // let sql = "SELECT * FROM students";
    dbase.query(sql, (err, res) => {
      if (err) {
        throw err;
      }
      console.log(res);
    });

    */

    //*********************** ENTER MULTIPLE RECORDS INTO MYSQL DATABASE **************************** */

    /*

    let sql = "INSERT INTO students (name, email, phone) VALUES ? ";

    let value = [
      ['Chris', 'chris@yahoo.com', '0723456777'],
      ['Kennedy', 'kennedy@yahoo.com', '0723546667'],
      ['Maureen', 'maureen@yahoo.com', '0789234576']
    ];

    dbase.query(sql, [value], (err, res) => {
      if (err) {
        throw err;
      }
      console.log(res.affectedRows + ' are inserted');
    });

    */

    //*********************** ENTER SINGLE RECORD TO MYSQL DATABASE ******************************** */

    /* 

    let sql = "INSERT INTO students (name, email, phone) VALUES(' Erick','erick@yahoocom', '0720000000')";
    dbase.query(sql, (err, res) => {
      if (err) {
        throw err;
      }
      console.log(res);
    });
    console.log('Database successfully connected');

    */
})