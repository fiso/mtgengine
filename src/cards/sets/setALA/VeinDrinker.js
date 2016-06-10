"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VeinDrinker extends UnimplementedCard {
  constructor (game) {
    super(game, "Vein Drinker", "Shards of Alara", "ALA");
  }
}

module.exports = VeinDrinker;
