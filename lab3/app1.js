var Twitter = require('twitter');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors =require('cors');
var jsonfile = require('jsonfile');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var file ='tree.json';


    var client = new Twitter({
        consumer_key: 'zsqXkaIOiCHXj8NB6wCdzf2Vi',
        consumer_secret: 'wHEzqmkwW8N3ia2Nv3WZMoDzXO1ry5CMGVG7dZ5J6fU44JKrUe',
        access_token_key: '611748255-2SydB8ibdF8jASl7yPTlm66GqGuD9hYUUXceVA9V',
        access_token_secret: 'FOWMax3hnTXZS3pPC1GnWs76UHxJCM8s0rmOwEnInxInE'
    });

    var params = {screen_name: 'swaroop995', count :"20"};
    client.get('followers/list', params, function(error, tweets, response) {
        if (!error) {
            console.log("received data");
            var tweets1= [];
            for(i=0; i<tweets.users.length; i++){
                var obj = {
                    name : tweets.users[i].name,
                    friends_count : tweets.users[i].friends_count
                };
                tweets1.push(obj);
            }
            console.log(tweets1);
         }
        jsonfile.writeFile(file, tweets1, function (err) {
            console.error(err)
        })

});

