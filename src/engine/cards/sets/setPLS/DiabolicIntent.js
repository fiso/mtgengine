"use strict";
const Constants = require ("../../../Constants");
const DiabolicIntentBase = require("../setBBD/DiabolicIntent");

class DiabolicIntent extends DiabolicIntentBase {
  constructor (game) {
    super(game, "Diabolic Intent", "Planeshift", "PLS");
  }
}

module.exports = DiabolicIntent;
