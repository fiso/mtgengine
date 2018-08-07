"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HieroglyphicIllumination extends UnimplementedCard {
  constructor (game) {
    super(game, "Hieroglyphic Illumination", "Amonkhet", "AKH");
  }
}

module.exports = HieroglyphicIllumination;
