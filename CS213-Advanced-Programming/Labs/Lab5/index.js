var express = require('express');

var app = express();

app.set('view engine', 'pug');
app.set('views','./views');

app.get('/first_template', function(req, res){
   res.render('first_view');
});

var server = app.listen(8081, function () {
   var host = server.address().address;
   var port = server.address().port;
   
   console.log("Example app listening at http://%s:%s", host, port);
})