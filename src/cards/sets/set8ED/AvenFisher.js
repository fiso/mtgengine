"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AvenFisher extends UnimplementedCard {
  constructor (game) {
    super(game, "Aven Fisher", "Eighth Edition", "8ED");
  }
}

module.exports = AvenFisher;
