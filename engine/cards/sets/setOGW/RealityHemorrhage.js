"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RealityHemorrhage extends Card {
  constructor(game) {
    super(game, "Reality Hemorrhage", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = RealityHemorrhage;
