const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/api", (req, res) => {
  const { units, direction } = req.body;
  const speakOutput = `FROM GAME: Moving: ${units}, ${direction}`;
  res.json({ received: JSON.stringify({ units, direction }), speakOutput });
})

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, './public', 'index.html'));
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

module.exports = app;