"use strict";
const Constants = require ("../../../Constants");
const TragicSlipBase = require("../setC14/TragicSlip");

class TragicSlip extends TragicSlipBase {
  constructor(game) {
    super(game, "Tragic Slip", "Duel Decks: Jace vs. Vraska", "DDM");
  }
}

module.exports = TragicSlip;
