"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SparkFiend extends UnimplementedCard {
  constructor(game) {
    super(game, "Spark Fiend", "Unglued", "UGL");
  }
}

module.exports = SparkFiend;
