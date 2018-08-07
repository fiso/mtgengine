"use strict";
const Constants = require ("../../../Constants");
const BatteringRamBase = require("../set5ED/BatteringRam");

class BatteringRam extends BatteringRamBase {
  constructor (game) {
    super(game, "Battering Ram", "Antiquities", "ATQ");
  }
}

module.exports = BatteringRam;
