const encryptPassword = require('encrypt-password');
const jwt = require('jsonwebtoken');  // Using comma,d npm i --save  jsonwebtoken

encryptPassword.secret = 'Secrect key never changed.';
encryptPassword.min = 8;
encryptPassword.max = 24;
encryptPassword.pattern = /^\w{8,24}$/;



module.exports = (app) => {

  // Import User's model
  const User = app.models.User;

  return {
    login
  };

  function login(req, res) {

    checkEmail()
      .then(foundUser => checkPassword(foundUser))
      .then(foundUser => generateToken(foundUser))
      .catch(err => console.log(err));


    function checkEmail() {
      return new Promise((resolve, reject) => {
        User
          .findOne({
            email: req.body.email
          })
          .exec(function (err, user) {
            if (err) {
              reject(err);
              res.sendStatus(500);
            }
            if (user) {
              resolve(user);
            }
          });
      });
    }
//ckeck password if email user is found
    function checkPassword(foundUser) {
      return new Promise((resolve, reject) => {
        let checkedPassword = encryptPassword(req.body.password, 'signatrue');
        if (checkedPassword === foundUser.password) {
          resolve(foundUser);
        } else {
          reject('Password does not match');
          res.sendStatus(500);
        }
      });
    }
//generate token if password is check
    function generateToken(foundUser) {
      return new Promise((resolve, reject) => {
        jwt.sign({
            data: foundUser.firstName
          },
          foundUser.password, {
            expiresIn: 60 * 60 * 24 * 30
          }, // expires in 30 days
          function (err, token) {
            if (token) {
              res.send(token);
            }
            if (err) {
              reject('Cannot generate token');
              res.sendStatus(500);
            }
          });
      });
    }
  }
}
