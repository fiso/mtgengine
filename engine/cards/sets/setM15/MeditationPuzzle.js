"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MeditationPuzzle extends Card {
  constructor(game) {
    super(game, "Meditation Puzzle", "Magic 2015 Core Set", "M15");
  }
}

module.exports = MeditationPuzzle;
