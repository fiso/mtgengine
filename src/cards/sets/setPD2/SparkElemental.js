"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SparkElemental extends UnimplementedCard {
  constructor (game) {
    super(game, "Spark Elemental", "Premium Deck Series: Fire and Lightning", "PD2");
  }
}

module.exports = SparkElemental;
