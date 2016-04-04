"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AinokSurvivalist extends Card {
  constructor(game) {
    super(game, "Ainok Survivalist", "Dragons of Tarkir", "DTK");
  }
}

module.exports = AinokSurvivalist;
