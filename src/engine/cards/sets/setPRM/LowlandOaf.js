"use strict";
const Constants = require ("../../../Constants");
const LowlandOafBase = require("../setLRW/LowlandOaf");

class LowlandOaf extends LowlandOafBase {
  constructor (game) {
    super(game, "Lowland Oaf", "Magic Online Promos", "PRM");
  }
}

module.exports = LowlandOaf;
