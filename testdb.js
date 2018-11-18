const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/27017');
const Car = require('./models/Cars')

const newCar = new Car({ name: 'bmw', yearOfRelease: 2016, maxSpeed: 150, modelNumber: 3837 });
newCar.save().then(() => console.log('Vrooom!'));