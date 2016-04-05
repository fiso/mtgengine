"use strict";
const Constants = require ("../../../Constants");
const FireTempestBase = require("../setME4/FireTempest");

class FireTempest extends FireTempestBase {
  constructor(game) {
    super(game, "Fire Tempest", "Starter 1999", "S99");
  }
}

module.exports = FireTempest;
