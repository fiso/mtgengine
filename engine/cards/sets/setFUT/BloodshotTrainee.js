"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BloodshotTrainee extends Card {
  constructor(game) {
    super(game, "Bloodshot Trainee", "Future Sight", "FUT");
  }
}

module.exports = BloodshotTrainee;
