"use strict";
const Constants = require ("../../../Constants");
const WornPowerstoneBase = require("../setC14/WornPowerstone");

class WornPowerstone extends WornPowerstoneBase {
  constructor(game) {
    super(game, "Worn Powerstone", "Commander 2015", "C15");
  }
}

module.exports = WornPowerstone;
