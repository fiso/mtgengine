"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BlightedGorge extends UnimplementedCard {
  constructor(game) {
    super(game, "Blighted Gorge", "Battle for Zendikar", "BFZ");
  }
}

module.exports = BlightedGorge;
