"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RoyalAssassin extends UnimplementedCard {
  constructor (game) {
    super(game, "Royal Assassin", "Collector's Edition", "CED");
  }
}

module.exports = RoyalAssassin;
