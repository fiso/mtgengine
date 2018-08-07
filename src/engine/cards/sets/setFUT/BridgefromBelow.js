"use strict";
const Constants = require ("../../../Constants");
const BridgefromBelowBase = require("../setMMA/BridgefromBelow");

class BridgefromBelow extends BridgefromBelowBase {
  constructor (game) {
    super(game, "Bridge from Below", "Future Sight", "FUT");
  }
}

module.exports = BridgefromBelow;
