"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TrenchGorger extends UnimplementedCard {
  constructor (game) {
    super(game, "Trench Gorger", "Commander 2011", "CMD");
  }
}

module.exports = TrenchGorger;
