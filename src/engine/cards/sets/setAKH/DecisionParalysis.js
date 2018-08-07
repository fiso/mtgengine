"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DecisionParalysis extends UnimplementedCard {
  constructor (game) {
    super(game, "Decision Paralysis", "Amonkhet", "AKH");
  }
}

module.exports = DecisionParalysis;
