"use strict";
const Constants = require ("../../../Constants");
const BatheinLightBase = require("../setCMA/BatheinLight");

class BatheinLight extends BatheinLightBase {
  constructor (game) {
    super(game, "Bathe in Light", "Commander 2011", "CMD");
  }
}

module.exports = BatheinLight;
