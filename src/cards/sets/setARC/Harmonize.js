"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Harmonize extends UnimplementedCard {
  constructor (game) {
    super(game, "Harmonize", "Archenemy", "ARC");
  }
}

module.exports = Harmonize;
