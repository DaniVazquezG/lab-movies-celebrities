//  Add your code here
const mongoose = require('mongoose')
const { Schema, model } = mongoose

const CelebritySchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },

    occupation: {
        type: String,
        trim: true
    },

    catchPhrase: {
        type: String,
        trim: true,
        required: true
    }
})

const CelebrityModel = model('Celebrity', CelebritySchema)

module.exports = CelebrityModel