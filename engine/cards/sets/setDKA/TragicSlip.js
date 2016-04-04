"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TragicSlipBase = require("../setC14/TragicSlip.js");

class TragicSlip extends TragicSlipBase {
  constructor(game) {
    super(game, "Tragic Slip", "Dark Ascension", "DKA");
  }
}

module.exports = TragicSlip;
