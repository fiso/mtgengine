"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CabalTrainee extends Card {
  constructor(game) {
    super(game, "Cabal Trainee", "Judgment", "JUD");
  }
}

module.exports = CabalTrainee;
