"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HokoriDustDrinker extends UnimplementedCard {
  constructor(game) {
    super(game, "Hokori, Dust Drinker", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = HokoriDustDrinker;
