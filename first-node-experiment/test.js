let express = require("express");
let ourApp = express();

ourApp.use(express.urlencoded({extended:false}))

ourApp.get('/', function(req, res) {
  res.send(`
    <form action="/answer" method="POST">
      <p>what color us the sky on a clear and sunny day?</p>
      <input name="skyColor" autocomplete="off">
      <button> Submit Answer</button>
    </form>
    `);
})


ourApp.post('/answer', function(req, res){
  if (req.body.skyColor.toUpperCase() == "BLUE" ){
    res.send(`
      <p>Congrats tha is the correct answer</p>
      <a href="/">Back to homepage</a>
    `)
  } else {
    res.send(`
      <p>Oops the answer is wrong!!</p>
      <a href="/">Back to homepage</a>
    `)
  } 
})
ourApp.get('/answer', function(req, res){
  res.send("Are u lost ?there is nothing to see here !")
})

ourApp.listen(3000)