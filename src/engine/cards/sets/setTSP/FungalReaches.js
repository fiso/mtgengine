"use strict";
const Constants = require ("../../../Constants");
const FungalReachesBase = require("../setPZ1/FungalReaches");

class FungalReaches extends FungalReachesBase {
  constructor (game) {
    super(game, "Fungal Reaches", "Time Spiral", "TSP");
  }
}

module.exports = FungalReaches;
