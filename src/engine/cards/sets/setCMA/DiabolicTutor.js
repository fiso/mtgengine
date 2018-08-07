"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DiabolicTutor extends UnimplementedCard {
  constructor (game) {
    super(game, "Diabolic Tutor", "Commander Anthology", "CMA");
  }
}

module.exports = DiabolicTutor;
