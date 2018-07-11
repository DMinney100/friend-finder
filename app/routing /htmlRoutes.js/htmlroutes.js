//dependency 
var path = require('path');

//route 
module.experts = function(app) {

//get request 
    app.get('/survey', function(req, res) {
        res.sendFile(path.join(_dirname + '/../public/survey.html'));
    });

    //if no matching route 
    app.use(function(req, res) {
        res.sendFile(path.join(_dirname = '/../public/home.html'));
    });
}