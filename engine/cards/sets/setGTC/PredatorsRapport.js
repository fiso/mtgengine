"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PredatorsRapport extends UnimplementedCard {
  constructor(game) {
    super(game, "Predator's Rapport", "Gatecrash", "GTC");
  }
}

module.exports = PredatorsRapport;
