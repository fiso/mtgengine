"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FrostTitanBase = require("../setC14/FrostTitan.js");

class FrostTitan extends FrostTitanBase {
  constructor(game) {
    super(game, "Frost Titan", "Media Inserts", "pMEI");
  }
}

module.exports = FrostTitan;
