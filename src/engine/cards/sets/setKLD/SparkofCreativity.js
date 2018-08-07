"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SparkofCreativity extends UnimplementedCard {
  constructor (game) {
    super(game, "Spark of Creativity", "Kaladesh", "KLD");
  }
}

module.exports = SparkofCreativity;
