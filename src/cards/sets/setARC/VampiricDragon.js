"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VampiricDragon extends UnimplementedCard {
  constructor (game) {
    super(game, "Vampiric Dragon", "Archenemy", "ARC");
  }
}

module.exports = VampiricDragon;
