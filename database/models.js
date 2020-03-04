const db = require('./index.js');

module.exports = {
readAll: callback => {
  db.query("SELECT * FROM list;", (err, result) => {
    if (err){
      callback(err);
    } else {
      callback(null, result)
    }
  })
},
addItem: ({item, quantity}, callback) => {
  db.query(`INSERT INTO list (item, quantity) VALUES ("${item}", ${quantity});`, (err) => {
    if (err) {
      callback(err);
    } else {
      callback(null);
    }
  });
},
deleteItem: (id, callback) => {
  db.query(`DELETE FROM list WHERE id = ${id};`, (err) => {
    if (err) {
      callback(err);
    } else {
      callback(null);
    }
  });
},


};