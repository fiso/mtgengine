"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FungalReachesBase = require("../setCMD/FungalReaches.js");

class FungalReaches extends FungalReachesBase {
  constructor(game) {
    super(game, "Fungal Reaches", "Time Spiral", "TSP");
  }
}

module.exports = FungalReaches;
