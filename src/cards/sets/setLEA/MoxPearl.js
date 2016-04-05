"use strict";
const Constants = require ("../../../Constants");
const MoxPearlBase = require("../setCED/MoxPearl");

class MoxPearl extends MoxPearlBase {
  constructor(game) {
    super(game, "Mox Pearl", "Limited Edition Alpha", "LEA");
  }
}

module.exports = MoxPearl;
