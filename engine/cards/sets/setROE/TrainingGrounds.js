"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TrainingGrounds extends Card {
  constructor(game) {
    super(game, "Training Grounds", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = TrainingGrounds;
