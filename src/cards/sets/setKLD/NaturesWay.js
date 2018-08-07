"use strict";
const Constants = require ("../../../Constants");
const NaturesWayBase = require("../setDDU/NaturesWay");

class NaturesWay extends NaturesWayBase {
  constructor (game) {
    super(game, "Nature's Way", "Kaladesh", "KLD");
  }
}

module.exports = NaturesWay;
