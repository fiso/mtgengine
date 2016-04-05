"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DrillSkimmer extends UnimplementedCard {
  constructor(game) {
    super(game, "Drill-Skimmer", "Darksteel", "DST");
  }
}

module.exports = DrillSkimmer;
