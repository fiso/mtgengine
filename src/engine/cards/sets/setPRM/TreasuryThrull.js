"use strict";
const Constants = require ("../../../Constants");
const TreasuryThrullBase = require("../setC15/TreasuryThrull");

class TreasuryThrull extends TreasuryThrullBase {
  constructor (game) {
    super(game, "Treasury Thrull", "Magic Online Promos", "PRM");
  }
}

module.exports = TreasuryThrull;
