"use strict";
const Constants = require ("../../../Constants");
const DiabolicTutorBase = require("../setCMA/DiabolicTutor");

class DiabolicTutor extends DiabolicTutorBase {
  constructor (game) {
    super(game, "Diabolic Tutor", "Magic 2014", "M14");
  }
}

module.exports = DiabolicTutor;
