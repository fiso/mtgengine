"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TrugaJungle extends UnimplementedCard {
  constructor (game) {
    super(game, "Truga Jungle", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = TrugaJungle;
