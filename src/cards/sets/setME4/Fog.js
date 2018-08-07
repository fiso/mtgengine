"use strict";
const Constants = require ("../../../Constants");
const FogBase = require("../setEMA/Fog");

class Fog extends FogBase {
  constructor (game) {
    super(game, "Fog", "Masters Edition IV", "ME4");
  }
}

module.exports = Fog;
