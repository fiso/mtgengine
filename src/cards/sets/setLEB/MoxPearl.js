"use strict";
const Constants = require ("../../../Constants");
const MoxPearlBase = require("../setCED/MoxPearl");

class MoxPearl extends MoxPearlBase {
  constructor (game) {
    super(game, "Mox Pearl", "Limited Edition Beta", "LEB");
  }
}

module.exports = MoxPearl;
