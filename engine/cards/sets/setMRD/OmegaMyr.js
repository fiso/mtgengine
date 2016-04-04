"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class OmegaMyr extends Card {
  constructor(game) {
    super(game, "Omega Myr", "Mirrodin", "MRD");
  }
}

module.exports = OmegaMyr;
