"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PredatoryAdvantage extends Card {
  constructor(game) {
    super(game, "Predatory Advantage", "Alara Reborn", "ARB");
  }
}

module.exports = PredatoryAdvantage;
