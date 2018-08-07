"use strict";
const Constants = require ("../../../Constants");
const RadiantFountainBase = require("../setIMA/RadiantFountain");

class RadiantFountain extends RadiantFountainBase {
  constructor (game) {
    super(game, "Radiant Fountain", "Magic 2015", "M15");
  }
}

module.exports = RadiantFountain;
