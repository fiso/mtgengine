"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RoyalDecreeBase = require("../setALL/RoyalDecree.js");

class RoyalDecree extends RoyalDecreeBase {
  constructor(game) {
    super(game, "Royal Decree", "Masters Edition II", "ME2");
  }
}

module.exports = RoyalDecree;
