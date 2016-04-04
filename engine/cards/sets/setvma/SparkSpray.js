"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SparkSprayBase = require("../setSCG/SparkSpray.js");

class SparkSpray extends SparkSprayBase {
  constructor(game) {
    super(game, "Spark Spray", "Vintage Masters", "VMA");
  }
}

module.exports = SparkSpray;
