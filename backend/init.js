const mongoose = require('mongoose');

// create models as importable from instance
require( './models/product' );

mongoose.connect( 'mongodb://localhost/articles', { useNewUrlParser: true } );

const connection = mongoose.connection;

connection.on( 'error', console.error.bind( console, 'connection error:') );

connection.on('open', function() {
  console.log( 'connected to mongodb database' );
});

mongoose.set('useFindAndModify', false)
// module.exports = connection;