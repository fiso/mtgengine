"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DemonsHerald extends UnimplementedCard {
  constructor (game) {
    super(game, "Demon's Herald", "Shards of Alara", "ALA");
  }
}

module.exports = DemonsHerald;
