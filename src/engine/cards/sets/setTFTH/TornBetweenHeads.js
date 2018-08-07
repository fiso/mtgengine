"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TornBetweenHeads extends UnimplementedCard {
  constructor (game) {
    super(game, "Torn Between Heads", "Face the Hydra", "TFTH");
  }
}

module.exports = TornBetweenHeads;
