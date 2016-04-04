"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FrostTitanBase = require("../setC14/FrostTitan.js");

class FrostTitan extends FrostTitanBase {
  constructor(game) {
    super(game, "Frost Titan", "Magic 2011", "M11");
  }
}

module.exports = FrostTitan;
