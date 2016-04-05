"use strict";
const Constants = require ("../../../Constants");
const FogBase = require("../setARC/Fog");

class Fog extends FogBase {
  constructor(game) {
    super(game, "Fog", "International Collector's Edition", "CEI");
  }
}

module.exports = Fog;
