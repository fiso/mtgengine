"use strict";
const Constants = require ("../../../Constants");
const TragicSlipBase = require("../setC14/TragicSlip");

class TragicSlip extends TragicSlipBase {
  constructor(game) {
    super(game, "Tragic Slip", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = TragicSlip;
