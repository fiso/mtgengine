"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SalvageTitan extends UnimplementedCard {
  constructor (game) {
    super(game, "Salvage Titan", "Shards of Alara", "ALA");
  }
}

module.exports = SalvageTitan;
