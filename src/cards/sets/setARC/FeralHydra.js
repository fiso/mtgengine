"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FeralHydra extends UnimplementedCard {
  constructor (game) {
    super(game, "Feral Hydra", "Archenemy", "ARC");
  }
}

module.exports = FeralHydra;
