"use strict";
const Constants = require ("../../../Constants");
const BatheinLightBase = require("../setCMA/BatheinLight");

class BatheinLight extends BatheinLightBase {
  constructor (game) {
    super(game, "Bathe in Light", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = BatheinLight;
