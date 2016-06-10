"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SparkTrooper extends UnimplementedCard {
  constructor (game) {
    super(game, "Spark Trooper", "Gatecrash", "GTC");
  }
}

module.exports = SparkTrooper;
