/**
 * Created by Vijaya Yeruva on 5/27/2017.
 */

var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://swaroop832:swaroop832@ds247678.mlab.com:47678/swaroop'; //mongodb://<dbuser>:<dbpassword>@ds239128.mlab.com:39128/<dbname>

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    console.log("Connected correctly to server");
    db.close();
});