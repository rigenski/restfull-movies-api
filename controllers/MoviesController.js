const Movies = require("./../models/MoviesModel");

// GET DATA
exports.getAllMoviesData = async (req, res) => {
  const movies = await Movies.find();
  res.status(200).json({
    status: "success",
    result: movies,
  });
};

// POST DATA
exports.createMoviesData = async (req, res) => {
  try {
    const {
      title,
      description: [{ genres, rates }],
    } = req.body;

    const newMovies = new Movies({
      title,
      description: [{ genres, rates }],
    });
    const saveMovies = await newMovies.save();
    res.status(200).json({
      status: "success",
      message: "movies data has ben added succesfully",
      result: saveMovies,
    });
  } catch (err) {
    console.log(err);
  }
};

// GET DATA BY ID
exports.getMoviesDataByID = async (req, res) => {
  const moviesID = await Movies.findById(req.params.id);
  res.status(200).json({
    status: "success",
    result: moviesID,
  });
};

// UPDATE DATA
exports.updateMoviesData = async (req, res) => {
  await Movies.findByIdAndUpdate(req.params.id, req.body, (err, result) => {
    if (err) {
      return res.status(422).json({
        status: "error",
        message: err.message,
      });
    }
    res.status(200).json({
      status: "success",
      message: "movies data has ben updated successfully",
      result: result,
    });
  });
};

// DELETE DATA
exports.deleteMoviesData = async (req, res) => {
  await Movies.findByIdAndDelete(req.params.id, (err, result) => {
    if (err) {
      return res.status(422).json({
        status: "error",
        message: err.message,
      });
    }
    res.status(200).json({
      status: "success",
      message: "movies data has been deleted successfully",
    });
  });
};
