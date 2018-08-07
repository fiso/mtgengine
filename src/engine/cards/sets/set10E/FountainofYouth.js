"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FountainofYouth extends UnimplementedCard {
  constructor (game) {
    super(game, "Fountain of Youth", "Tenth Edition", "10E");
  }
}

module.exports = FountainofYouth;
