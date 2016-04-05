"use strict";
const Constants = require ("../../../Constants");
const BridgefromBelowBase = require("../setFUT/BridgefromBelow");

class BridgefromBelow extends BridgefromBelowBase {
  constructor(game) {
    super(game, "Bridge from Below", "Modern Masters", "MMA");
  }
}

module.exports = BridgefromBelow;
