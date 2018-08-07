"use strict";
const Constants = require ("../../../Constants");
const FogBase = require("../setEMA/Fog");

class Fog extends FogBase {
  constructor (game) {
    super(game, "Fog", "Seventh Edition", "7ED");
  }
}

module.exports = Fog;
