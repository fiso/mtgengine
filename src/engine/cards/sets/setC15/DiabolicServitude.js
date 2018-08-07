"use strict";
const Constants = require ("../../../Constants");
const DiabolicServitudeBase = require("../setCMA/DiabolicServitude");

class DiabolicServitude extends DiabolicServitudeBase {
  constructor (game) {
    super(game, "Diabolic Servitude", "Commander 2015", "C15");
  }
}

module.exports = DiabolicServitude;
