const express = require("express");
const router = express.Router();
const MovieList = require("../Models/movieListing");

//@type                      GET
//@route                    /movieLists
//@description              This route is for fetching movie data
//@access                   Public

router.get("/movieLists", async (req, res) => {
  try {
    const responses = await EmployeeInputs.find();
    res.send(responses);
  } catch (err) {
    console.log(err);
  }
});

// //@type                      POST
// //@route                    /moviePosts
// //@description              This route is for posting movieData to MongoDb
// //@access                   Public

router.post("/moviePosts", async (req, res) => {
  try {
    const requestData = await req.body.data;
    console.log(requestData.movieName);
    const movieList = new MovieList({
      movieName: requestData.movieName,
      actor: requestData.actor,
      director: requestData.director,
      producer: requestData.producer,
      yearOfRelease: requestData.yearOfRelease,
      review: requestData.review
    });
    let response = await movieList.save().then();
    console.log(response);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
