const db = require('../postgres_raw');
const userController = {};

userController.getUser = ((req, res, next) => {
  console.log('\n*********** userController.getUser ****************', `\nMETHOD: ${req.method} \nENDPOINT: '${req.url}' \nBODY: ${JSON.stringify(req.body)} \nLOCALS: ${JSON.stringify(res.locals)} `);
  const { username, password } = req.body;
  // query string
  let queryString = 'SELECT * FROM users WHERE username = $1';
  // values return in an array
  let values = [username];
  // quering the databse
  db.query(queryString, values, (err, user) => {
    if (!user.rows.length) {
      return next({ log: 'error with query #getUser', message: 'Wrong username' });
    } else {
      // destructuring response from query and saving as user because that is the response we're getting back from the database(users table)
      // user.rows[0] is where we receive the results array
      const actualPassword = user.rows[0].password;
        // conditional statement: if password matches results
      if (actualPassword === password) {
          // store results in res.locals method
        res.locals.user = user.rows[0];
      } else {
        return next({ log: 'error inside #getUser', message: 'Wrong password' });
      }
      return next();
    }
  });
});


module.exports = userController;

