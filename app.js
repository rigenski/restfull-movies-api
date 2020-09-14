const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const MoviesRoutes = require("./routes/MoviesRoutes");
const app = express();

app.use(express.json());
app.use("/api/v1/movies", MoviesRoutes);

dotenv.config({ path: "./config.env" });

mongoose
  .connect(process.env.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => console.log("success"))
  .catch((err) => console.log(err));

app.listen(process.env.PORT, () => {
  console.log(`connect in PORT ${process.env.PORT}`);
});
