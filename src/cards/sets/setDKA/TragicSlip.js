"use strict";
const Constants = require ("../../../Constants");
const TragicSlipBase = require("../setC14/TragicSlip");

class TragicSlip extends TragicSlipBase {
  constructor (game) {
    super(game, "Tragic Slip", "Dark Ascension", "DKA");
  }
}

module.exports = TragicSlip;
