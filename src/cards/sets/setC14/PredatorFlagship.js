"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PredatorFlagship extends UnimplementedCard {
  constructor (game) {
    super(game, "Predator, Flagship", "Commander 2014", "C14");
  }
}

module.exports = PredatorFlagship;
