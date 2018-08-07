"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PredatoryHunger extends UnimplementedCard {
  constructor (game) {
    super(game, "Predatory Hunger", "Exodus", "EXO");
  }
}

module.exports = PredatoryHunger;
