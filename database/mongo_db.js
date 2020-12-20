let mongoose = require('mongoose');

const username = "MacOS-v1";
const password = "39aJJ6tgMqaf4tfJ";
const dbName = "local_library";

class Database {
    constructor() {
        this._connect();
    }
    _connect() {
        var mongoURI = 'mongodb+srv://MacOS-v1:39aJJ6tgMqaf4tfJ@clusterone.1bte5.mongodb.net/local_library?retryWrites=true&w=majority';
        mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
            .then(() => {
                console.log('Database connection successful');
            })
            .catch((error) => {
                console.error('Database connection error:', error.message);
            });
    }
}

module.exports = new Database()
