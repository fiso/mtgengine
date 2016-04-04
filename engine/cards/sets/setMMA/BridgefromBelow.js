"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BridgefromBelowBase = require("../setFUT/BridgefromBelow.js");

class BridgefromBelow extends BridgefromBelowBase {
  constructor(game) {
    super(game, "Bridge from Below", "Modern Masters", "MMA");
  }
}

module.exports = BridgefromBelow;
