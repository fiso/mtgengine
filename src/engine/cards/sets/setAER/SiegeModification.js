"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SiegeModification extends UnimplementedCard {
  constructor (game) {
    super(game, "Siege Modification", "Aether Revolt", "AER");
  }
}

module.exports = SiegeModification;
