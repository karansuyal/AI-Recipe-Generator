// pages/api/recipes.js
import axios from 'axios';

export default async function handler(req, res) {
  const { ingredients } = req.query;

  if (!ingredients) {
    return res.status(400).json({ error: 'Ingredients parameter is missing' });
  }

  try {
    const response = await axios.get('https://api.spoonacular.com/recipes/findByIngredients', {
      params: {
        ingredients,
        apiKey: process.env.SPOONACULAR_API_KEY, // Server-side API key from .env.local
      },
    });

    // If the external API responds with 200 OK, forward that data to the client
    return res.status(200).json(response.data);
  } catch (error) {
    // Log detailed error info to help diagnose the issue
    console.error('Error in API route:', error.response ? error.response.data : error.message);
    return res.status(500).json({ error: 'Failed to fetch recipes. Please try again.' });
  }
}
