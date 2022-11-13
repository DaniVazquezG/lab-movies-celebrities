const mongoose = require('mongoose')
const { Schema, model } = mongoose

const MovieSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },

    genre: {
        type: String,
        required: true,
        trim: true
    },

    plot: {
        type: String,
        required: true,
        trim: true
    },

    cast: [{
        type: mongoose.Types.ObjectId, ref: "Celebrity"
    }]


});

const MovieModel = model("Movie", MovieSchema)
module.exports = MovieModel