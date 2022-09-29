const Joke =require('../models/jokes.model');
 
module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then((allJokes) => {
            res.json({ jokes: allJokes })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong finding all jokes', error: err })
        });
}
 
module.exports.findOneSingleJoke = (req, res) => {
    Joke.findOne({ _id: req.params.id })
        .then(oneSingleJoke => {
            res.json({ jokes: oneSingleJoke })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong finding one single joke', error: err })
        });}
 
module.exports.createNewJoke = (req, res) => {
    Joke.create(req.body)
        .then(newlyCreatedJoke => {
            res.json({ jokes: newlyCreatedJoke })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong creating new joke', error: err })
        });}
 
module.exports.updateExistingJoke = (req, res) => {
    Joke.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedJoke => {
            res.json({ jokes: updatedJoke })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong updating existing joke', error: err })
        });}
 
module.exports.deleteAnExistingJoke = (req, res) => {
    Joke.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json({ result: result })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong deleting a joke', error: err })
        });}
