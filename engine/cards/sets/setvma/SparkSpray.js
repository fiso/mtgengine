"use strict";
const Constants = require ("../../../Constants");
const SparkSprayBase = require("../setSCG/SparkSpray");

class SparkSpray extends SparkSprayBase {
  constructor(game) {
    super(game, "Spark Spray", "Vintage Masters", "VMA");
  }
}

module.exports = SparkSpray;
