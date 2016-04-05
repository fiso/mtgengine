"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ScarwoodBandits extends UnimplementedCard {
  constructor(game) {
    super(game, "Scarwood Bandits", "Masters Edition IV", "ME4");
  }
}

module.exports = ScarwoodBandits;
