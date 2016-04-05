"use strict";
const Constants = require ("../../../Constants");
const BatteringRamBase = require("../setATQ/BatteringRam");

class BatteringRam extends BatteringRamBase {
  constructor(game) {
    super(game, "Battering Ram", "Introductory Two-Player Set", "ITP");
  }
}

module.exports = BatteringRam;
