"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LostinaLabyrinth extends Card {
  constructor(game) {
    super(game, "Lost in a Labyrinth", "Theros", "THS");
  }
}

module.exports = LostinaLabyrinth;
