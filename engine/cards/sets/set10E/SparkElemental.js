"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SparkElementalBase = require("../set5DN/SparkElemental.js");

class SparkElemental extends SparkElementalBase {
  constructor(game) {
    super(game, "Spark Elemental", "Tenth Edition", "10E");
  }
}

module.exports = SparkElemental;
