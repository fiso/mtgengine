"use strict";
const Constants = require ("../../../Constants");
const DiabolicIntentBase = require("../setBBD/DiabolicIntent");

class DiabolicIntent extends DiabolicIntentBase {
  constructor (game) {
    super(game, "Diabolic Intent", "Amonkhet Invocations", "MP2");
  }
}

module.exports = DiabolicIntent;
