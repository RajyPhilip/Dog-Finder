const mongoose = require('mongoose');

const dogFinderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required:true
    },
    dog1: {
        type: String,
        required: true
    },
    dog2: {
        type: String,
        required: true
    },
    winner: {
        type: String,
        require:true
    }
}, {timestamps: true});

const DogFinder = mongoose.model('DogFinder', dogFinderSchema);

module.exports = DogFinder;