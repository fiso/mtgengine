"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SparkJolt extends UnimplementedCard {
  constructor(game) {
    super(game, "Spark Jolt", "Theros", "THS");
  }
}

module.exports = SparkJolt;
