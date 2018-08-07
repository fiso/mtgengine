"use strict";
const Constants = require ("../../../Constants");
const AinokSurvivalistBase = require("../setA25/AinokSurvivalist");

class AinokSurvivalist extends AinokSurvivalistBase {
  constructor (game) {
    super(game, "Ainok Survivalist", "Dragons of Tarkir", "DTK");
  }
}

module.exports = AinokSurvivalist;
