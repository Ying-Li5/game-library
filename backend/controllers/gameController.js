const express = require("express");
const router = express.Router();
const gameService = require('../services/gameService.js')

router.get("/", async function (req, res) {
  const result = await gameService.getGames()
  res.status(200).json(result)
});

router.get("/:game_id", async function (req, res) {
  const result = await gameService.getGameById(req.params.game_id)
  res.status(200).json(result)
});

router.post("/review", function (req, res) {
  res.send("POST - Update avg review score of game");
});

module.exports = router;