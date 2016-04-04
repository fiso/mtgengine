"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SparkElementalBase = require("../set5DN/SparkElemental.js");

class SparkElemental extends SparkElementalBase {
  constructor(game) {
    super(game, "Spark Elemental", "Premium Deck Series: Fire and Lightning", "PD2");
  }
}

module.exports = SparkElemental;
