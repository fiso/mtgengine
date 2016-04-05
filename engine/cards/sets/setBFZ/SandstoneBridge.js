"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SandstoneBridge extends UnimplementedCard {
  constructor(game) {
    super(game, "Sandstone Bridge", "Battle for Zendikar", "BFZ");
  }
}

module.exports = SandstoneBridge;
