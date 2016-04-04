"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SparkMage extends Card {
  constructor(game) {
    super(game, "Spark Mage", "Odyssey", "ODY");
  }
}

module.exports = SparkMage;
