"use strict";
const Constants = require ("../../../Constants");
const DiabolicTutorBase = require("../setCMA/DiabolicTutor");

class DiabolicTutor extends DiabolicTutorBase {
  constructor (game) {
    super(game, "Diabolic Tutor", "Kaladesh", "KLD");
  }
}

module.exports = DiabolicTutor;
