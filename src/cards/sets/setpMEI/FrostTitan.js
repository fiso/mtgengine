"use strict";
const Constants = require ("../../../Constants");
const FrostTitanBase = require("../setC14/FrostTitan");

class FrostTitan extends FrostTitanBase {
  constructor (game) {
    super(game, "Frost Titan", "Media Inserts", "pMEI");
  }
}

module.exports = FrostTitan;
