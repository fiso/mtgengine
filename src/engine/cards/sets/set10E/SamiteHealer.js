"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SamiteHealer extends UnimplementedCard {
  constructor (game) {
    super(game, "Samite Healer", "Tenth Edition", "10E");
  }
}

module.exports = SamiteHealer;
