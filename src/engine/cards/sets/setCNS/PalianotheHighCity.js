"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PalianotheHighCity extends UnimplementedCard {
  constructor (game) {
    super(game, "Paliano, the High City", "Conspiracy", "CNS");
  }
}

module.exports = PalianotheHighCity;
