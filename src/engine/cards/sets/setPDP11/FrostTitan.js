"use strict";
const Constants = require ("../../../Constants");
const FrostTitanBase = require("../setC14/FrostTitan");

class FrostTitan extends FrostTitanBase {
  constructor (game) {
    super(game, "Frost Titan", "Duels of the Planeswalkers Promos 2011", "PDP11");
  }
}

module.exports = FrostTitan;
