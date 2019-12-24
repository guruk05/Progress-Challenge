const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Schema for MovieList updation

const movieList = new Schema({
                movieName: String,
                actor: String,
                director: String,
                producer: String,
                yearOfRelease: String,
                review: String,
})


module.exports = EmployeeInputs = mongoose.model("movieList", movieList);
