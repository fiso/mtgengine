"use strict";
const Constants = require ("../../../Constants");
const WornPowerstoneBase = require("../setC18/WornPowerstone");

class WornPowerstone extends WornPowerstoneBase {
  constructor (game) {
    super(game, "Worn Powerstone", "Legendary Cube", "PZ1");
  }
}

module.exports = WornPowerstone;
