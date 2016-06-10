"use strict";
const Constants = require ("../../../Constants");
const PollenLullabyBase = require("../setLRW/PollenLullaby");

class PollenLullaby extends PollenLullabyBase {
  constructor (game) {
    super(game, "Pollen Lullaby", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = PollenLullaby;
