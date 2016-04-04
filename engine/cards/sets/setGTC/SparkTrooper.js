"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SparkTrooper extends Card {
  constructor(game) {
    super(game, "Spark Trooper", "Gatecrash", "GTC");
  }
}

module.exports = SparkTrooper;
