let cors = require('cors');
let express = require('express');
let path = require('path');
let logger = require('morgan');
let app = express();

app.use(logger('dev'));

// Enable cors
app.use(cors());
app.options('*', cors());

app.use(express.static(__dirname + '/dist/inventory-frontend')); 

app.get('/*', function (req, res) { 
    res.sendFile(path.join(__dirname + '/dist/inventory-frontend/')); 
}); 

app.listen(process.env.PORT || 8080, () => {
    console.log(`====> Angular app is running.`)
})