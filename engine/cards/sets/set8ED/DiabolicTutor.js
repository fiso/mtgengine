"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DiabolicTutor extends UnimplementedCard {
  constructor(game) {
    super(game, "Diabolic Tutor", "Eighth Edition", "8ED");
  }
}

module.exports = DiabolicTutor;
