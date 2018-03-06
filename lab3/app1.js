var Twitter = require('twitter');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors =require('cors');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/get',function (req,res) {

    var client = new Twitter({
        consumer_key: 'zsqXkaIOiCHXj8NB6wCdzf2Vi',
        consumer_secret: 'wHEzqmkwW8N3ia2Nv3WZMoDzXO1ry5CMGVG7dZ5J6fU44JKrUe',
        access_token_key: '611748255-2SydB8ibdF8jASl7yPTlm66GqGuD9hYUUXceVA9V',
        access_token_secret: 'FOWMax3hnTXZS3pPC1GnWs76UHxJCM8s0rmOwEnInxInE'
    });

    var params = {screen_name: 'swaroop995', count :"200"};
    client.get('followers/list', params, function(error, tweets, response) {
        if (!error) {
            console.log("received data");
            res.send(tweets);
            console.log("sent data")
        }

    });
});

var server = app.listen(8081,function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Example app listening at http://%s:%s", host, port)
});
