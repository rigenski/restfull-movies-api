const mongoose = require("mongoose");

const MoviesSchema = mongoose.Schema({
  title: String,
  description: [
    {
      genres: String,
      rates: Number,
    },
  ],
});

const MoviesModel = mongoose.model("Movies", MoviesSchema);

module.exports = MoviesModel;
