"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GazeofAdamaro extends UnimplementedCard {
  constructor (game) {
    super(game, "Gaze of Adamaro", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = GazeofAdamaro;
