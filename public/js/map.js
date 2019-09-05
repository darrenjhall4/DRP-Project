var mysql = require("mysql");
let .env = require("dotenv");
var connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: process.env.PASSWORD,
    database: "nat_parks_db"
  });
  connection.connect(function(err) {
    if (err) throw err;
    // run the start function after the connection is made to prompt the user
    console.log("connected as id " + connection.threadId);
  });
  function queryLandmarks() {
    let landmark_list = []; 
      connection.query("SELECT * FROM parks", function(err, res) {
        landmark_list = res;
      });
      return landmark_list;
  }
  function loadMap() {
    queryLandmarks();
    for (let i = 0; i<landmark_list.length; i++) {
      var marker = L.marker([landmark_list[i].longitude, landmark_list[i].latitude]).addTo(myMap);
    }
  }