// recipe_api.js
const express = require('express');
const app = express();
const PORT = 5002;

const recipes = [
  { title: "Avocado Toast", time: 10, image: "https://..." },
  { title: "Grilled Chicken Bowl", time: 25, image: "https://..." }
];

app.get('/api/recipe', (req, res) => {
  const recipe = recipes[Math.floor(Math.random() * recipes.length)];
  res.json(recipe);
});

app.listen(PORT, () => console.log(`Recipe API running on port ${PORT}`));
