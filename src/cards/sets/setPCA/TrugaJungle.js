"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TrugaJungle extends UnimplementedCard {
  constructor (game) {
    super(game, "Truga Jungle", "Planechase Anthology", "PCA");
  }
}

module.exports = TrugaJungle;
