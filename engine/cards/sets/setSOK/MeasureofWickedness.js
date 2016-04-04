"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MeasureofWickedness extends Card {
  constructor(game) {
    super(game, "Measure of Wickedness", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = MeasureofWickedness;
