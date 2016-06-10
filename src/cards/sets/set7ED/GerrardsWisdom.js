"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GerrardsWisdom extends UnimplementedCard {
  constructor (game) {
    super(game, "Gerrard's Wisdom", "Seventh Edition", "7ED");
  }
}

module.exports = GerrardsWisdom;
