"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GrownfromtheStump extends UnimplementedCard {
  constructor (game) {
    super(game, "Grown from the Stump", "Face the Hydra", "TFTH");
  }
}

module.exports = GrownfromtheStump;
