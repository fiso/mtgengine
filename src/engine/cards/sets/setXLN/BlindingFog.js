"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BlindingFog extends UnimplementedCard {
  constructor (game) {
    super(game, "Blinding Fog", "Ixalan", "XLN");
  }
}

module.exports = BlindingFog;
