const mongoose = require('mongoose');

const mongoDb = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/employeeDb', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    });
    console.log('mongodb connected');
  } catch (err) {
    console.log(err);
  }
}

module.exports = mongoDb;
