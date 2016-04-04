"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BloodshotTraineeBase = require("../setFUT/BloodshotTrainee.js");

class BloodshotTrainee extends BloodshotTraineeBase {
  constructor(game) {
    super(game, "Bloodshot Trainee", "Scars of Mirrodin", "SOM");
  }
}

module.exports = BloodshotTrainee;
