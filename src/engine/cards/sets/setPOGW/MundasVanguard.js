"use strict";
const Constants = require ("../../../Constants");
const MundasVanguardBase = require("../setOGW/MundasVanguard");

class MundasVanguard extends MundasVanguardBase {
  constructor (game) {
    super(game, "Munda's Vanguard", "Oath of the Gatewatch Promos", "POGW");
  }
}

module.exports = MundasVanguard;
