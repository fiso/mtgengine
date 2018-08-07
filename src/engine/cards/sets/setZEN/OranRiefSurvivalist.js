"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OranRiefSurvivalist extends UnimplementedCard {
  constructor (game) {
    super(game, "Oran-Rief Survivalist", "Zendikar", "ZEN");
  }
}

module.exports = OranRiefSurvivalist;
