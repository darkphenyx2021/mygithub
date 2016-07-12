/**
 * Created by joshua.fair on 7/12/2016.
 */
var express = require('express');

var app = express();
const PORT = process.env.PORT || 3000;

app.use(function(req, res, next){
    if(req.headers['x-forwarded-proto'] === 'http'){

    } else {
        //es.redirect('http://'+req.hostname+req.url);
        next();
    }
});

app.use(express.static('app'));

app.listen(3000, function(){
    console.log("Server up and running on port " + 3000);
});