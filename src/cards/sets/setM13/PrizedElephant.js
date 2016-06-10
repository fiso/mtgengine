"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PrizedElephant extends UnimplementedCard {
  constructor (game) {
    super(game, "Prized Elephant", "Magic 2013", "M13");
  }
}

module.exports = PrizedElephant;
