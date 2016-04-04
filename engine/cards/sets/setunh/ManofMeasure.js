"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ManofMeasure extends Card {
  constructor(game) {
    super(game, "Man of Measure", "Unhinged", "UNH");
  }
}

module.exports = ManofMeasure;
