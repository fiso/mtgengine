"use strict";
const Constants = require ("../../../Constants");
const BloodshotTraineeBase = require("../setFUT/BloodshotTrainee");

class BloodshotTrainee extends BloodshotTraineeBase {
  constructor (game) {
    super(game, "Bloodshot Trainee", "Scars of Mirrodin", "SOM");
  }
}

module.exports = BloodshotTrainee;
