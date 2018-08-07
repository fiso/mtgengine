"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DiabolicIntent extends UnimplementedCard {
  constructor (game) {
    super(game, "Diabolic Intent", "Battlebond", "BBD");
  }
}

module.exports = DiabolicIntent;
