"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SkyriderTrainee extends UnimplementedCard {
  constructor(game) {
    super(game, "Skyrider Trainee", "Guildpact", "GPT");
  }
}

module.exports = SkyriderTrainee;
