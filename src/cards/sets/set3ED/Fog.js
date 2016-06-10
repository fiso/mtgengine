"use strict";
const Constants = require ("../../../Constants");
const FogBase = require("../setARC/Fog");

class Fog extends FogBase {
  constructor (game) {
    super(game, "Fog", "Revised Edition", "3ED");
  }
}

module.exports = Fog;
