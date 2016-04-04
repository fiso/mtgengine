"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CapturedSunlight extends UnimplementedCard {
  constructor(game) {
    super(game, "Captured Sunlight", "Alara Reborn", "ARB");
  }
}

module.exports = CapturedSunlight;
