"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BlindingLight extends UnimplementedCard {
  constructor (game) {
    super(game, "Blinding Light", "Invasion", "INV");
  }
}

module.exports = BlindingLight;
