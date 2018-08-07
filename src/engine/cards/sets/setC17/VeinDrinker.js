"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VeinDrinker extends UnimplementedCard {
  constructor (game) {
    super(game, "Vein Drinker", "Commander 2017", "C17");
  }
}

module.exports = VeinDrinker;
