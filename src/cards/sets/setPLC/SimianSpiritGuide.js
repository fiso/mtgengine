"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SimianSpiritGuide extends UnimplementedCard {
  constructor (game) {
    super(game, "Simian Spirit Guide", "Planar Chaos", "PLC");
  }
}

module.exports = SimianSpiritGuide;
