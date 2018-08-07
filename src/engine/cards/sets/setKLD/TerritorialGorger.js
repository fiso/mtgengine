"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TerritorialGorger extends UnimplementedCard {
  constructor (game) {
    super(game, "Territorial Gorger", "Kaladesh", "KLD");
  }
}

module.exports = TerritorialGorger;
