const mongoose = require('mongoose');

module.exports = mongoose.model('Car', { name: String, yearOfRelease: Number, maxSpeed: Number, modelNumber: Number });
