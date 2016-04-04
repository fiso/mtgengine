"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AltarsLight extends Card {
  constructor(game) {
    super(game, "Altar's Light", "Mirrodin", "MRD");
  }
}

module.exports = AltarsLight;
