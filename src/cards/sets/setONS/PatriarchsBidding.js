"use strict";
const Constants = require ("../../../Constants");
const PatriarchsBiddingBase = require("../setWC03/PatriarchsBidding");

class PatriarchsBidding extends PatriarchsBiddingBase {
  constructor (game) {
    super(game, "Patriarch's Bidding", "Onslaught", "ONS");
  }
}

module.exports = PatriarchsBidding;
