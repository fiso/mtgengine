"use strict";
const Constants = require ("../../../Constants");
const MoxPearlBase = require("../setVMA/MoxPearl");

class MoxPearl extends MoxPearlBase {
  constructor (game) {
    super(game, "Mox Pearl", "Vintage Championship", "OVNT");
  }
}

module.exports = MoxPearl;
