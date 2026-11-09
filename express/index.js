const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "about.html"));
});

app.get("/history", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "history.html"));
});

app.get("/achievements", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "achievements.html"));
});

// Keep the spell route from 3.1.
app.get("/spell", (req, res) => {
  const spellPath = path.join(__dirname, "..", "magic.txt");
  res.sendFile(spellPath);
});

// Any request that reaches this point gets a 404.
app.use((req, res) => {
  res.status(404).send(`
    <link rel="stylesheet" href="/css/styles.css">
    <header><h1>404 - Page Not Found</h1></header>
    <main style="text-align:center">
      <h2>Mischief Managed... but this page vanished.</h2>
      <p class="lead">The page you're looking for doesn't exist.</p>
      <p><a href="/" style="color:#4fd18b">Return Home</a></p>
    </main>`);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});