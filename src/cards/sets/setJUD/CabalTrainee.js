"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CabalTrainee extends UnimplementedCard {
  constructor (game) {
    super(game, "Cabal Trainee", "Judgment", "JUD");
  }
}

module.exports = CabalTrainee;
