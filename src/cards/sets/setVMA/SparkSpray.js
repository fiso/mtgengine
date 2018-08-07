"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SparkSpray extends UnimplementedCard {
  constructor (game) {
    super(game, "Spark Spray", "Vintage Masters", "VMA");
  }
}

module.exports = SparkSpray;
