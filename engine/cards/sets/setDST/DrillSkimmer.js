"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DrillSkimmer extends Card {
  constructor(game) {
    super(game, "Drill-Skimmer", "Darksteel", "DST");
  }
}

module.exports = DrillSkimmer;
