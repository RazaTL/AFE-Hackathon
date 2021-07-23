const path = require("path");
const express = require("express");

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.static(path.join(__dirname, "public")));

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
})

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, './public', 'index.html'));
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});