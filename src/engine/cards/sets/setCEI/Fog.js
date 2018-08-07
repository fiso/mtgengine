"use strict";
const Constants = require ("../../../Constants");
const FogBase = require("../setEMA/Fog");

class Fog extends FogBase {
  constructor (game) {
    super(game, "Fog", "Intl. Collectors’ Edition", "CEI");
  }
}

module.exports = Fog;
