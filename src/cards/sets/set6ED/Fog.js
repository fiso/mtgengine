"use strict";
const Constants = require ("../../../Constants");
const FogBase = require("../setARC/Fog");

class Fog extends FogBase {
  constructor (game) {
    super(game, "Fog", "Classic Sixth Edition", "6ED");
  }
}

module.exports = Fog;
