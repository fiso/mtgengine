"use strict";
const Constants = require ("../../../Constants");
const DiabolicTutorBase = require("../setCMA/DiabolicTutor");

class DiabolicTutor extends DiabolicTutorBase {
  constructor (game) {
    super(game, "Diabolic Tutor", "Magic 2011", "M11");
  }
}

module.exports = DiabolicTutor;
