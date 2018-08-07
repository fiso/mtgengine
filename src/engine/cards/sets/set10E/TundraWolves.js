"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TundraWolves extends UnimplementedCard {
  constructor (game) {
    super(game, "Tundra Wolves", "Tenth Edition", "10E");
  }
}

module.exports = TundraWolves;
