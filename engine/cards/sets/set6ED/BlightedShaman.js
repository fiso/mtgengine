"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BlightedShaman extends UnimplementedCard {
  constructor(game) {
    super(game, "Blighted Shaman", "Classic Sixth Edition", "6ED");
  }
}

module.exports = BlightedShaman;
