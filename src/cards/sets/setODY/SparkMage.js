"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SparkMage extends UnimplementedCard {
  constructor(game) {
    super(game, "Spark Mage", "Odyssey", "ODY");
  }
}

module.exports = SparkMage;
