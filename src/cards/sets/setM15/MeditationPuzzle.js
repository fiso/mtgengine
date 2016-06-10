"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MeditationPuzzle extends UnimplementedCard {
  constructor (game) {
    super(game, "Meditation Puzzle", "Magic 2015 Core Set", "M15");
  }
}

module.exports = MeditationPuzzle;
