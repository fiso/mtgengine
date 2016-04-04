"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DiabolicTutor extends Card {
  constructor(game) {
    super(game, "Diabolic Tutor", "Eighth Edition", "8ED");
  }
}

module.exports = DiabolicTutor;
