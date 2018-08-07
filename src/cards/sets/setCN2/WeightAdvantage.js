"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WeightAdvantage extends UnimplementedCard {
  constructor (game) {
    super(game, "Weight Advantage", "Conspiracy: Take the Crown", "CN2");
  }
}

module.exports = WeightAdvantage;
