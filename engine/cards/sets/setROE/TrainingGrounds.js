"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TrainingGrounds extends UnimplementedCard {
  constructor(game) {
    super(game, "Training Grounds", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = TrainingGrounds;
