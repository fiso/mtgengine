"use strict";
const Constants = require ("../../../Constants");
const RingofRenewalBase = require("../setFEM/RingofRenewal");

class RingofRenewal extends RingofRenewalBase {
  constructor(game) {
    super(game, "Ring of Renewal", "Masters Edition IV", "ME4");
  }
}

module.exports = RingofRenewal;
