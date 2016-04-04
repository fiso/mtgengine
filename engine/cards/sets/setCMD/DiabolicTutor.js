"use strict";
const Constants = require ("../../../Constants");
const DiabolicTutorBase = require("../set8ED/DiabolicTutor");

class DiabolicTutor extends DiabolicTutorBase {
  constructor(game) {
    super(game, "Diabolic Tutor", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = DiabolicTutor;
