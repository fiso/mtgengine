"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SimianSpiritGuide extends UnimplementedCard {
  constructor (game) {
    super(game, "Simian Spirit Guide", "Masters 25", "A25");
  }
}

module.exports = SimianSpiritGuide;
