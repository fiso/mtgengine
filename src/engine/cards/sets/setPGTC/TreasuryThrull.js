"use strict";
const Constants = require ("../../../Constants");
const TreasuryThrullBase = require("../setC15/TreasuryThrull");

class TreasuryThrull extends TreasuryThrullBase {
  constructor (game) {
    super(game, "Treasury Thrull", "Gatecrash Promos", "PGTC");
  }
}

module.exports = TreasuryThrull;
