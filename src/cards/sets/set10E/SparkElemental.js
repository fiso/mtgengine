"use strict";
const Constants = require ("../../../Constants");
const SparkElementalBase = require("../setPD2/SparkElemental");

class SparkElemental extends SparkElementalBase {
  constructor (game) {
    super(game, "Spark Elemental", "Tenth Edition", "10E");
  }
}

module.exports = SparkElemental;
