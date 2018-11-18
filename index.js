//initiate express
let express = require('express')
let app = express()

// import body parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());

//import mongoose
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/27017');

//import cars
const Car = require('./models/Cars')

const port = 3000
app.listen(port, () => console.log(`Server working. l istening on port ${port}!`))

app.get('/cars', function (req, res) {
    Car.find().then( function (cars){
        res.json(cars)
    })
  })

app.get('/cars/:name', function (req, res){
    const name = req.params.name
    Car.findOne({name: name}).then(function(car){
       res.json(car)
    })
})

app.post('/cars', function(req,res){
    const body = req.body
    //res.json(body)
    const newCar = new Car(body)
    newCar.save().then(function(car){
        res.json(car)
    })
  })

  app.delete('/cars', function (req, res){
      const name = req.body.name
      console.log(name)
      if (name === undefined){
          res.send("Specify car to delete")
      } else {
        Car.findOneAndDelete({name: name}).then(function(car){
            res.send("Car deleted")
            res.json(car)
        })
      }
      
  })

  app.put('/cars/:name', function (req, res){
      const query = req.params
      Car.findOneAndUpdate(query, req.body ).then(function(car){
          res.json(car)
      })
  })