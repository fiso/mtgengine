"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TreasuryThrullBase = require("../setC15/TreasuryThrull.js");

class TreasuryThrull extends TreasuryThrullBase {
  constructor(game) {
    super(game, "Treasury Thrull", "Gatecrash", "GTC");
  }
}

module.exports = TreasuryThrull;
