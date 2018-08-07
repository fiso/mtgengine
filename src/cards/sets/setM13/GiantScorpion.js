"use strict";
const Constants = require ("../../../Constants");
const GiantScorpionBase = require("../setDDR/GiantScorpion");

class GiantScorpion extends GiantScorpionBase {
  constructor (game) {
    super(game, "Giant Scorpion", "Magic 2013", "M13");
  }
}

module.exports = GiantScorpion;
