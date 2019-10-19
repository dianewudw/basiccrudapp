const path = require('path');
const express = require('express');
const app = express();
const PORT = 3000;
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const userRouter = require('./routes/userRouter');


// need to use bodyParser.json ==> we're sending json object from the front end as a string
app.use(bodyParser.json());
app.use(cookieParser());

// serves all static files in client folder/front-end static files and javascript searches for html file itself
app.use('/', express.static(path.resolve(__dirname, '../client')));

app.use('/user', userRouter);


app.use((err, req, res, next) => {
  const defaultError = {
    log: 'Yo dawg, you messed up!',
    message: 'Unexpected Error :(',
  }
  // newError: in case error doesn't have a log or message key in it
  const newError = { ...defaultError, ...err }
  console.log(newError.log);
  res.json({error: newError.message, });
});

app.listen(PORT, () => {
  console.log(`listening in on ${PORT} MUTHAFUCKAAAAA`);
});
