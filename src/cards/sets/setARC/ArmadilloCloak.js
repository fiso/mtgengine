"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ArmadilloCloak extends UnimplementedCard {
  constructor (game) {
    super(game, "Armadillo Cloak", "Archenemy", "ARC");
  }
}

module.exports = ArmadilloCloak;
