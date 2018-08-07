"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SavageHunger extends UnimplementedCard {
  constructor (game) {
    super(game, "Savage Hunger", "Shards of Alara", "ALA");
  }
}

module.exports = SavageHunger;
