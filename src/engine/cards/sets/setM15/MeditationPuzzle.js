"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MeditationPuzzle extends UnimplementedCard {
  constructor (game) {
    super(game, "Meditation Puzzle", "Magic 2015", "M15");
  }
}

module.exports = MeditationPuzzle;
