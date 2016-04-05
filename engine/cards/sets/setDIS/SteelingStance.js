"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SteelingStance extends UnimplementedCard {
  constructor(game) {
    super(game, "Steeling Stance", "Dissension", "DIS");
  }
}

module.exports = SteelingStance;
