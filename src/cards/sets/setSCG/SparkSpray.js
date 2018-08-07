"use strict";
const Constants = require ("../../../Constants");
const SparkSprayBase = require("../setVMA/SparkSpray");

class SparkSpray extends SparkSprayBase {
  constructor (game) {
    super(game, "Spark Spray", "Scourge", "SCG");
  }
}

module.exports = SparkSpray;
