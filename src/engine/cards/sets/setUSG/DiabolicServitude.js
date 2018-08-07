"use strict";
const Constants = require ("../../../Constants");
const DiabolicServitudeBase = require("../setCMA/DiabolicServitude");

class DiabolicServitude extends DiabolicServitudeBase {
  constructor (game) {
    super(game, "Diabolic Servitude", "Urza's Saga", "USG");
  }
}

module.exports = DiabolicServitude;
