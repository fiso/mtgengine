"use strict";
const Constants = require ("../../../Constants");
const KindredDominanceBase = require("../setC17/KindredDominance");

class KindredDominance extends KindredDominanceBase {
  constructor (game) {
    super(game, "Kindred Dominance", "You Make the Cube", "PZ2");
  }
}

module.exports = KindredDominance;
