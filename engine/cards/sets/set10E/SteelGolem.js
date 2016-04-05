"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SteelGolem extends UnimplementedCard {
  constructor(game) {
    super(game, "Steel Golem", "Tenth Edition", "10E");
  }
}

module.exports = SteelGolem;
