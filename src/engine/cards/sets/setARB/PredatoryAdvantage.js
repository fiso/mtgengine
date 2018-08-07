"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PredatoryAdvantage extends UnimplementedCard {
  constructor (game) {
    super(game, "Predatory Advantage", "Alara Reborn", "ARB");
  }
}

module.exports = PredatoryAdvantage;
