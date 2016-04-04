"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PredatorsRapport extends Card {
  constructor(game) {
    super(game, "Predator's Rapport", "Gatecrash", "GTC");
  }
}

module.exports = PredatorsRapport;
