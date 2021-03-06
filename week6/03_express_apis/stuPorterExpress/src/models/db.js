// Setting up ORM for Mongoose

var mongoose         = require('mongoose');

var connectionString = 'mongodb://localhost/accounts';

mongoose.connect(connectionString);

mongoose.connection.on('connected', function(){
  console.log('mongoose connected to ' + connectionString)
})

mongoose.connection.on('error', function(err){
  console.log('mongoose connection error ' + err);
})

mongoose.connection.on('disconnected', function(){
  console.log('mongoose disconnected ');
})

