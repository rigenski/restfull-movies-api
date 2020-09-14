const express = require("express");
const router = express.Router();
const MoviesController = require("./../controllers/MoviesController");

const {
  getAllMoviesData,
  createMoviesData,
  getMoviesDataByID,
  updateMoviesData,
  deleteMoviesData,
} = MoviesController;

router.route("/").get(getAllMoviesData).post(createMoviesData);
router
  .route("/:id")
  .get(getMoviesDataByID)
  .put(updateMoviesData)
  .delete(deleteMoviesData);

module.exports = router;
