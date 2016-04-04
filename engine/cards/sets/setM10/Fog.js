"use strict";
const Constants = require ("../../../Constants");
const FogBase = require("../setARC/Fog");

class Fog extends FogBase {
  constructor(game) {
    super(game, "Fog", "Magic 2010", "M10");
  }
}

module.exports = Fog;
