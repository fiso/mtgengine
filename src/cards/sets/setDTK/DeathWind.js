"use strict";
const Constants = require ("../../../Constants");
const DeathWindBase = require("../setCN2/DeathWind");

class DeathWind extends DeathWindBase {
  constructor (game) {
    super(game, "Death Wind", "Dragons of Tarkir", "DTK");
  }
}

module.exports = DeathWind;
