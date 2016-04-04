"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GreenhiltTrainee extends Card {
  constructor(game) {
    super(game, "Greenhilt Trainee", "New Phyrexia", "NPH");
  }
}

module.exports = GreenhiltTrainee;
