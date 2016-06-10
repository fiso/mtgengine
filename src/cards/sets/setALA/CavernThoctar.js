"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CavernThoctar extends UnimplementedCard {
  constructor (game) {
    super(game, "Cavern Thoctar", "Shards of Alara", "ALA");
  }
}

module.exports = CavernThoctar;
