"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SkyriderTrainee extends Card {
  constructor(game) {
    super(game, "Skyrider Trainee", "Guildpact", "GPT");
  }
}

module.exports = SkyriderTrainee;
