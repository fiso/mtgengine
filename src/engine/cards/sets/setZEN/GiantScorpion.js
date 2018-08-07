"use strict";
const Constants = require ("../../../Constants");
const GiantScorpionBase = require("../setDDR/GiantScorpion");

class GiantScorpion extends GiantScorpionBase {
  constructor (game) {
    super(game, "Giant Scorpion", "Zendikar", "ZEN");
  }
}

module.exports = GiantScorpion;
