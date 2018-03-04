/**
 * Created by Vijaya Yeruva on 5/27/2017.
 */
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://swaroop:swaroop@ds247678.mlab.com:47678/swaroop';

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbase = db.db("swaroop");
    dbase.createCollection("newCollection", function(err, res) {
        if (err) throw err;
        console.log("Collection created!");
        db.close();
    });
});
