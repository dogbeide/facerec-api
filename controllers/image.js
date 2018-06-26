const Clarifai = require('clarifai');
const { db } = require('../models/db');


const app = new Clarifai.App({
  apiKey: process.env.API_KEY_CLARIFAI
});

const post = (req, res) => {
  const input = req.body.input;
  const id = req.body.id;
  app.models
    .predict(Clarifai.FACE_DETECT_MODEL, input)
    .then(data => {
      db('users')
        .where('id', '=', id)
        .increment('entries', 1)
        .returning('entries')
        .then(entries => res.json({
          data,
          entries
        }))
        .catch(err => res.status(500).json({ err: 'Failed to get entries' }))
    })
    .catch(err => {
      console.log(err);
      res.status(400).json({ err: 'Error using API' })
    })
}

module.exports = { post }
