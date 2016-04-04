"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TeleminPerformance extends Card {
  constructor(game) {
    super(game, "Telemin Performance", "Conflux", "CON");
  }
}

module.exports = TeleminPerformance;
