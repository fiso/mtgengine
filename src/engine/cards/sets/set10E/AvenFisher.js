"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AvenFisher extends UnimplementedCard {
  constructor (game) {
    super(game, "Aven Fisher", "Tenth Edition", "10E");
  }
}

module.exports = AvenFisher;
