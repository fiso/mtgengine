"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AinokSurvivalist extends UnimplementedCard {
  constructor (game) {
    super(game, "Ainok Survivalist", "Masters 25", "A25");
  }
}

module.exports = AinokSurvivalist;
