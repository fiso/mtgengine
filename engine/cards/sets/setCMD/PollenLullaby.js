"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PollenLullabyBase = require("../setLRW/PollenLullaby.js");

class PollenLullaby extends PollenLullabyBase {
  constructor(game) {
    super(game, "Pollen Lullaby", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = PollenLullaby;
