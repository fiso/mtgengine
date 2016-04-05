"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RealityHemorrhage extends UnimplementedCard {
  constructor(game) {
    super(game, "Reality Hemorrhage", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = RealityHemorrhage;
