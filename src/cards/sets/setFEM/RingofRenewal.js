"use strict";
const Constants = require ("../../../Constants");
const RingofRenewalBase = require("../setME4/RingofRenewal");

class RingofRenewal extends RingofRenewalBase {
  constructor (game) {
    super(game, "Ring of Renewal", "Fallen Empires", "FEM");
  }
}

module.exports = RingofRenewal;
