"use strict";
const Constants = require ("../../../Constants");
const FungalReachesBase = require("../setCMD/FungalReaches");

class FungalReaches extends FungalReachesBase {
  constructor (game) {
    super(game, "Fungal Reaches", "Time Spiral", "TSP");
  }
}

module.exports = FungalReaches;
