"use strict";
const Constants = require ("../../../Constants");
const MundasVanguardBase = require("../setOGW/MundasVanguard");

class MundasVanguard extends MundasVanguardBase {
  constructor (game) {
    super(game, "Munda's Vanguard", "Magic Online Promos", "PRM");
  }
}

module.exports = MundasVanguard;
