// require into page
const { Pool } = require('pg');
const pool = new Pool({
  connectionString: 'postgres://ehroddjd:DmNs83CectFJ1SCljVAXEMQBqwfbZ6QK@salt.db.elephantsql.com:5432/ehroddjd',
});
// create database connection
pool.query('CREATE TABLE IF NOT EXISTS users(_id SERIAL PRIMARY KEY, username VARCHAR, password VARCHAR);', (err, res) => {
  // console.log('RES: ', res, 'ERR: ', err);
  if (err) {
    console.log(err.stack);
  }
  else {
    console.log(res.rows);
  }
});

module.exports = pool;
