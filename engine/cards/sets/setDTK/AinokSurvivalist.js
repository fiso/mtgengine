"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AinokSurvivalist extends UnimplementedCard {
  constructor(game) {
    super(game, "Ainok Survivalist", "Dragons of Tarkir", "DTK");
  }
}

module.exports = AinokSurvivalist;
