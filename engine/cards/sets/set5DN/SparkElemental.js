"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SparkElemental extends UnimplementedCard {
  constructor(game) {
    super(game, "Spark Elemental", "Fifth Dawn", "5DN");
  }
}

module.exports = SparkElemental;
