"use strict";
const Constants = require ("../../../Constants");
const FungalReachesBase = require("../setPZ1/FungalReaches");

class FungalReaches extends FungalReachesBase {
  constructor (game) {
    super(game, "Fungal Reaches", "Commander 2011", "CMD");
  }
}

module.exports = FungalReaches;
