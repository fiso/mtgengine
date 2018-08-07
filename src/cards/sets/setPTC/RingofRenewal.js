"use strict";
const Constants = require ("../../../Constants");
const RingofRenewalBase = require("../setME4/RingofRenewal");

class RingofRenewal extends RingofRenewalBase {
  constructor (game) {
    super(game, "Ring of Renewal", "Pro Tour Collector Set", "PTC");
  }
}

module.exports = RingofRenewal;
