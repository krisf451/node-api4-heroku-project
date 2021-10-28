// require("dotenv").config();
const express = require("express");

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send(`<h1>Web 47 Rocks!!!</h1>`);
});
app.get("/port", (req, res) => {
  res.send(`<h1>port is ${PORT}</h1>`);
});

app.listen(PORT, () => {
  console.log(`listening on ${PORT}`);
});

function cohortRocks() {
  console.log("arguments: ", process.argv.slice(2));
  console.log(`web ${process.argv[2]} rocks`);
}
function cohortRocksEnv() {
  console.log(`home folder is ${process.env.HOME}`);
  console.log(`my shell is ${process.env.SHELL}`);
  console.log(`current user is ${process.env.USER}`);
  console.log(`my super secret comes from "${process.env.SUPER_SECRET_KEY}"`);
}
cohortRocksEnv();
