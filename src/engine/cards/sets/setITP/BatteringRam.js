"use strict";
const Constants = require ("../../../Constants");
const BatteringRamBase = require("../set5ED/BatteringRam");

class BatteringRam extends BatteringRamBase {
  constructor (game) {
    super(game, "Battering Ram", "Introductory Two-Player Set", "ITP");
  }
}

module.exports = BatteringRam;
