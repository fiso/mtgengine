"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LostinaLabyrinth extends UnimplementedCard {
  constructor (game) {
    super(game, "Lost in a Labyrinth", "Theros", "THS");
  }
}

module.exports = LostinaLabyrinth;
