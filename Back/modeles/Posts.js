//appel de mongoose
const mongoose = require("mongoose");

// instance de mongoose
const testSchema = new mongoose.Schema({
    nom: {
        type: String
    },
    réalisateur: {
        type: String
    },
    durée: {
        type: Number
    }
})

module.exports = mongoose.model('TestCollection', testSchema, 'TestCollection');