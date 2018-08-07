"use strict";
const Constants = require ("../../../Constants");
const FireTempestBase = require("../setME4/FireTempest");

class FireTempest extends FireTempestBase {
  constructor (game) {
    super(game, "Fire Tempest", "Portal", "POR");
  }
}

module.exports = FireTempest;
