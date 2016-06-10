"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Pariah extends UnimplementedCard {
  constructor (game) {
    super(game, "Pariah", "Seventh Edition", "7ED");
  }
}

module.exports = Pariah;
