"use strict";
const Constants = require ("../../../Constants");
const FogBase = require("../setEMA/Fog");

class Fog extends FogBase {
  constructor (game) {
    super(game, "Fog", "Mirage", "MIR");
  }
}

module.exports = Fog;
