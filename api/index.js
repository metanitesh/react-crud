const express = require('express')
const app = express()
const port = 5000
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/";
const bodyParser = require('body-parser');
const cors = require('cors');;
app.use(cors())


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
const data = [{
  title: "Learn Js",
  author: "Nitesh",
  category: "Javascript",
  length: 10,
}, {
  title: "Learn Python",
  author: "Bell",
  category: "go",
  length: 20,
}];


app.get('/', (req, res) => res.send('Hello World!'))
app.get('/courses', (req, res) => {
  // MongoClient.connect(url, function (err, db) {
  //   if (err) throw err;
  //   var dbo = db.db("meta_app");
  //   dbo.collection("courses").find({}, function (err, result) {
  //     if (err) throw err;
  //     console.log(result);
  //     db.close();
  //   });
  // });

  res.send(data);
})

app.post('/course', (req, res) => {
  data.push(req.body)
  res.send(req.body);
})



app.listen(port, () => console.log(`Example app listening on port ${port}!`))