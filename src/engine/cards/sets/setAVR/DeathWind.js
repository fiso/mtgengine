"use strict";
const Constants = require ("../../../Constants");
const DeathWindBase = require("../setCN2/DeathWind");

class DeathWind extends DeathWindBase {
  constructor (game) {
    super(game, "Death Wind", "Avacyn Restored", "AVR");
  }
}

module.exports = DeathWind;
