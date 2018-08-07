"use strict";
const Constants = require ("../../../Constants");
const RiversRebukeBase = require("../setXLN/RiversRebuke");

class RiversRebuke extends RiversRebukeBase {
  constructor (game) {
    super(game, "River's Rebuke", "Ixalan Promos", "PXLN");
  }
}

module.exports = RiversRebuke;
