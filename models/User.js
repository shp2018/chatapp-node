// access db
var db = require("../db/config/config");

module.exports = {
  // Return a new promise for finding a single user
  findOne: function(user) {
    console.log("user");
    return new Promise((resolve, reject) => {
      const queryString = "SELECT * FROM user WHERE username=?";
      db.query(queryString, [user.username], (err, res) => {
        if (err) {
          // send back an error
          reject(err);
        } else {
          if (res.length) {
            // found a user with username that was passed in
            resolve(res[0]);
          } else {
            // did not find a user with username
            resolve(false);
          }
        }
      });
    });
  },
  createOne: function(user) {
    console.log("user");
    return new Promise((resolve, reject) => {
      const queryString = "INSERT INTO user(username,password) VALUES(?,?)";
      db.query(queryString, [user.username, user.password], (err, res) => {
        if (err) {
          // send back an error
          reject(err);
        } else {
            resolve(true)
          
        }
      });
    });
  },

};
