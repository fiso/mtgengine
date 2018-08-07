"use strict";
const Constants = require ("../../../Constants");
const RoyalDecreeBase = require("../setME2/RoyalDecree");

class RoyalDecree extends RoyalDecreeBase {
  constructor (game) {
    super(game, "Royal Decree", "Alliances", "ALL");
  }
}

module.exports = RoyalDecree;
