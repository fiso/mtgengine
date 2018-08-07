"use strict";
const Constants = require ("../../../Constants");
const TragicSlipBase = require("../setEMA/TragicSlip");

class TragicSlip extends TragicSlipBase {
  constructor (game) {
    super(game, "Tragic Slip", "Conspiracy", "CNS");
  }
}

module.exports = TragicSlip;
