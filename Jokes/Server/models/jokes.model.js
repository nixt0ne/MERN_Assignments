const mongoose = require('mongoose');
 
const jokeSchema = new mongoose.Schema({
    setup: {
        type: String
    },
    punchline: {
        type: String
    }
});
 
const Joke = mongoose.model('Joke', jokeSchema);
 
module.exports = Joke;
