"use strict";
const Constants = require ("../../../Constants");
const BenefactorsDraughtBase = require("../setPZ2/BenefactorsDraught");

class BenefactorsDraught extends BenefactorsDraughtBase {
  constructor (game) {
    super(game, "Benefactor's Draught", "Commander 2016", "C16");
  }
}

module.exports = BenefactorsDraught;
