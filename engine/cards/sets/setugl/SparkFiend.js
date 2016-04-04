"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SparkFiend extends Card {
  constructor(game) {
    super(game, "Spark Fiend", "Unglued", "UGL");
  }
}

module.exports = SparkFiend;
