"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TundraWolves extends UnimplementedCard {
  constructor(game) {
    super(game, "Tundra Wolves", "Classic Sixth Edition", "6ED");
  }
}

module.exports = TundraWolves;
