"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WaveWingElemental extends UnimplementedCard {
  constructor(game) {
    super(game, "Wave-Wing Elemental", "Battle for Zendikar", "BFZ");
  }
}

module.exports = WaveWingElemental;
