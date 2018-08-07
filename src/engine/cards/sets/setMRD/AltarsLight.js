"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AltarsLight extends UnimplementedCard {
  constructor (game) {
    super(game, "Altar's Light", "Mirrodin", "MRD");
  }
}

module.exports = AltarsLight;
