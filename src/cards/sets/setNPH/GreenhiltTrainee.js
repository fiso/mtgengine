"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GreenhiltTrainee extends UnimplementedCard {
  constructor (game) {
    super(game, "Greenhilt Trainee", "New Phyrexia", "NPH");
  }
}

module.exports = GreenhiltTrainee;
