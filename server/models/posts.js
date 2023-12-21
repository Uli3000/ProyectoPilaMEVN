const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    titulo: String,
    categoria: String,
    contenido: String,
    image: String,
    created: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("Post", postSchema);