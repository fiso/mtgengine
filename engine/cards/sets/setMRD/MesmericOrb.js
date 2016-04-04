"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MesmericOrb extends Card {
  constructor(game) {
    super(game, "Mesmeric Orb", "Mirrodin", "MRD");
  }
}

module.exports = MesmericOrb;
