"use strict";
const Constants = require ("../../../Constants");
const TempestofLightBase = require("../setM10/TempestofLight");

class TempestofLight extends TempestofLightBase {
  constructor (game) {
    super(game, "Tempest of Light", "Ninth Edition", "9ED");
  }
}

module.exports = TempestofLight;
