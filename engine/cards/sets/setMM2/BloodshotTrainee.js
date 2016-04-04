"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BloodshotTraineeBase = require("../setFUT/BloodshotTrainee.js");

class BloodshotTrainee extends BloodshotTraineeBase {
  constructor(game) {
    super(game, "Bloodshot Trainee", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = BloodshotTrainee;
